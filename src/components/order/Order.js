import React, { useState, useEffect } from "react";
import ApiManager from "../../modules/ApiManager";
import ProductCard from "../product/ProductCard";
import '../../styles/Order.css'

const Order = (props) => {

  const [paymentMethods, setPaymentMethods] = useState([])
  const [orderProducts, setOrderProducts] = useState([])
  const [total, setTotal] = useState('')
  const [paymentId, setPaymentId] = useState({ paymentTypeId: 0 })
  const [orderId, setOrderId] = useState(0)
  const [reRender, setReRender] = useState(false)

  const handleSubmit = () => {
    if (paymentId.paymentTypeId != 0) {
      ApiManager.update('orders', orderId, { 'payment_type_id': parseInt(paymentId.paymentTypeId) })
      .then(props.history.push('/'))
    }
  }

  const handleDelete = () => {
    ApiManager.delete('orders', orderId).then(() => {
      setReRender(!reRender)
      props.history.push('/')
    })
  }

  const handleSelectChange = (evt) => {
    const stateToChange = { ...paymentId };
    stateToChange[evt.target.id] = evt.target.value;
    setPaymentId(stateToChange);
  }

  const deleteOrderProduct = evt => {
    ApiManager.delete("orderproducts", evt.target.value)
        .then(setReRender(!reRender))
}

  useEffect(() => {
    ApiManager.getAll('paymenttypes').then(resp => {
      console.log(resp)
      setPaymentMethods(resp)
    })

    ApiManager.getAll('orderproducts').then(resp => {
      setOrderProducts(resp)  

      console.log(resp)
      var product;
      var orderTotal = 0;
      for (product of resp) {
        const price = parseFloat(product.product.price)
        orderTotal += price
        console.log(orderTotal)
      }
      setTotal(orderTotal)


      if (resp.length > 0) {
        setOrderId(resp[0].order_id)
      }
    })
    
  }, [reRender])



  return (
    <>
      {orderProducts.length > 0 ?
        <div className="orderContainer">
          <div>
            <section>
              {orderProducts.map(orderProduct => {
                return (<>
                <ProductCard product={orderProduct.product} key={orderProduct.id} />
                 <button className="deleteBtn" value={orderProduct.id} onClick={(evt) => {
                  deleteOrderProduct(evt)
                  }}>Delete Product</button></>
                )
              })}
            </section>
            <select id="paymentTypeId" className="paymentType" onChange={handleSelectChange}>
              <option>Select a payment method</option>
              {paymentMethods.map(paymentMethod => {
                return <option value={paymentMethod.id} key={paymentMethod.id}>{paymentMethod.merchant_name}</option>
              })}
            </select>
            <div className="orderTotal">Total: ${total}</div>
          </div>
          <div className="buttonContainer">
            <button id="orderId" onClick={handleSubmit}>
              Complete Order
            </button>
            <button onClick={handleDelete}>Cancel Order</button>
          </div>
        </div>
        : 
        <div>Add a Product to Start an Order</div>} </>

  );
};

export default Order