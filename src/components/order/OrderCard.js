import React from "react";
import OrderDetail from './OrderDetail'
import addPaymentToOrder from './Order'

const OrderCard = (props) => {

  return (
    <div>
      <h3>Created At:</h3>
      <p>{props.created_at}</p>
     <div>
      <OrderDetail/>
     </div>
     <div>
       <button type="button" onClick={() =>{
          props.history.push(`/order/${props.order.id}`);
       }}>Details</button>
     </div>
    </div>   
  );
};

export default OrderCard