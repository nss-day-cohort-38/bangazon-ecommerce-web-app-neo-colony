import React, { useState, useEffect } from "react";
import OrderDetail from './OrderDetail'
import addPaymentToOrder from './Order'
import ApiManager from "../../modules/ApiManager";
import ProductCard from "../product/ProductCard";

const Order = (props) => {

  const [paymentMethods, setPaymentMethods] = useState([])
  const [orderProducts, setOrderProducts] = useState([])
  const [paymentId, setPaymentId] = useState({ paymentTypeId: 0 })
  const [orderId, setOrderId] = useState({ orderId: 0 })
  const [reRender, setReRender] = useState(false)

  const handleSubmit = () => {
    if (paymentId.paymentTypeId != 0) {
      ApiManager.update('orders', orderId['orderId'], { 'payment_type_id': parseInt(paymentId.paymentTypeId) })
      .then(props.history.push('/'))
    }
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
      setPaymentMethods(resp)

    })
    ApiManager.getAll('orderproducts').then(resp => {
      setOrderProducts(resp)
      if (resp.length != 0 && orderId.orderId != 0) {
        setOrderId(resp.orderId)
      }
    })
    
  }, [reRender])



  return (
    <>
      {orderProducts.length > 0 ?
        <div>
          <div>
            <section>
              {orderProducts.map(orderProduct => {
                return (<>
                <ProductCard product={orderProduct.product} key={orderProduct.id} />
                 <button value={orderProduct.id} onClick={(evt) => {
                  deleteOrderProduct(evt)
                  }}>Delete Product</button></>
                )
              })}
            </section>
            <select id="paymentTypeId" onChange={handleSelectChange}>
              <option></option>
              {paymentMethods.map(paymentMethod => {
                return <option value={paymentMethod.id} key={paymentMethod.id}>{paymentMethod.merchant_name}</option>
              })}
            </select>
          </div>
          <button id="orderId" onClick={handleSubmit}>
            Complete Order</button>
          </div>
          : 
          <div>Add a Product to Start an Order</div>} </>

  );
};

export default Order