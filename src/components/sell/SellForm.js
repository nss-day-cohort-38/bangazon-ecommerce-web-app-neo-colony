import React, { useEffect, useState } from "react";
import ApiManager from "../../modules/ApiManager";
import ProductTypeListOptions from "./ProductTypeListOptions"

const SellProductForm = (props) => {
  const [productTypes, setProductTypes] = useState([])
  const [localDelivery, setLocalDelivery] = useState(false)
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    quantity: "",
    product_type_id: 0,
    location: "",
    image: "#"
  });

  const updateDelivery = () => {
    const delivery = localDelivery
    setLocalDelivery(!delivery)
  }

  const handleFieldChange = (evt) => {
    const stateToChange = { ...newProduct };
    stateToChange[evt.target.id] = evt.target.value;
    setNewProduct(stateToChange);
  };

  const handleFocusSelect = (event) => {
    const stateToChange = { ...newProduct }
    stateToChange.product_type_id = parseInt(event.target.value)
    setNewProduct(stateToChange)
}

  const handleSubmit = (e) => {
    e.preventDefault();

    const productObj = {
      title: newProduct.title,
      price: newProduct.price,
      description: newProduct.description,
      quantity: newProduct.quantity,
      location: newProduct.location,
      image: newProduct.image,
      product_type_id: newProduct.product_type_id
    };

    ApiManager.create("products", productObj).then(() =>
      props.history.push("/")
    );
  };

  const handleCancel = () => {
    props.history.push("/");
  };

  useEffect(() => {
    ApiManager.getAll("producttypes").then(response => setProductTypes(response))
}, [])

  return (
    <>
      <form>
        <h1>Sell a Product</h1>
        <fieldset>
          <label htmlFor="productTitle">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Product Title"
            onChange={handleFieldChange}
          ></input>
        </fieldset>
        <fieldset>
          <label>Price</label>
          <input
            type="text"
            id="price"
            className="form-control"
            placeholder="Product Price"
            onChange={handleFieldChange}
            required
          />
        </fieldset>
        <fieldset>
          <label>Description</label>
          <input
            type="text"
            id="description"
            className="form-control"
            placeholder="Product Description"
            onChange={handleFieldChange}
            required
          />
        </fieldset>
        <fieldset>
          <label>Quantity</label>
          <input
            type="text"
            id="quantity"
            className="form-control"
            placeholder="Product Quantity"
            onChange={handleFieldChange}
            required
          />
        </fieldset>
        <fieldset>
          <label>Local Delivery?</label>
          <input type="checkbox" onClick={updateDelivery} />
          {localDelivery ? 
          <div>
            <label>Location</label>
            <input
              type="text"
              id="location"
              className="form-control"
              placeholder="Product Location"
              onChange={handleFieldChange}
              required
            />
          </div>
        : null}
        </fieldset>
          
        <fieldset>
          <label>Product Type</label>
          <select className="custom-select" id="inputGroupSelect01" onChange={handleFocusSelect}>
              <option value="0" >Please select</option>
              {productTypes.length > 0 && productTypes.map((listObject) => {
                  return <ProductTypeListOptions
                  key={listObject.id}
                  value={listObject.id}
                  listObject={listObject}
                  {...props}
                  />
              })}
          </select>
          </fieldset>
        <fieldset>
          <button type="button" onClick={handleSubmit}>
            Sell
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default SellProductForm;
