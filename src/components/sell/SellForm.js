import React, { useEffect, useState } from "react";
import ApiManager from "../../modules/ApiManager";

const SellProductForm = (props) => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    quantity: "",
    product_type_id: 0,
    location: "",
  });

  const handleFieldChange = (evt) => {
    const stateToChange = { ...newProduct };
    stateToChange[evt.target.id] = evt.target.value;
    setNewProduct(stateToChange);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productObj = {
      title: newProduct.title,
      price: newProduct.price,
      description: newProduct.description,
      quantity: newProduct.quantity,
      location: newProduct.location,
      image: newProduct.image,
    };

    ApiManager.create("products", newProduct).then(() =>
      props.history.push("/")
    );
  };

  const handleCancel = () => {
    props.history.push("/");
  };

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
