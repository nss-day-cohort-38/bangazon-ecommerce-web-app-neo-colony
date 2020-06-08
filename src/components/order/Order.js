import React, { useState, useEffect } from "react";
import OrderDetail from './OrderDetail'
import addPaymentToOrder from './Order'
import ApiManager from "../../modules/ApiManager";
import ProductCard from "../product/ProductCard";

const Order = (props) => {

  const [paymentMethods, setPaymentMethods] = useState([])
  const [orderProducts, setOrderProducts] = useState([])
  const [paymentId, setPaymentId] = useState({paymentTypeId: 0})
  
  const handleSubmit =() =>{
    if(paymentId.paymentTypeId != 0) {
      ApiManager.updateOrder({'payment_type': paymentId.paymentTypeId})}
  }

  const handleSelectChange =(evt) =>{
    const stateToChange = { ...paymentId};
    stateToChange[evt.target.id] = evt.target.value;
    setPaymentId(stateToChange);
  }

  useEffect(() => {
    ApiManager.getAll('paymenttypes').then(resp => {
      setPaymentMethods(resp)
      console.log(resp)
    })
    ApiManager.getAll('orderproducts').then(resp => {
      setOrderProducts(resp)
    })
  }, []) 

  

  return (
    <div>
     <div>
       <section>
         {orderProducts.map(orderProduct => 
           <ProductCard product={orderProduct.product} key={orderProduct.id}/>
         )}
       </section>
       <select id="paymentTypeId" onChange={handleSelectChange}>
         <option></option>
         {paymentMethods.map(paymentMethod => {
           return <option value={paymentMethod.id}>{paymentMethod.merchant_name}</option>
         })}
       </select>
     </div>
     <button onClick={handleSubmit}>
        Complete Order
     </button>
    </div>   
  );
};

export default Order