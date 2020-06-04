import React from "react";

const OrderCard = (props) => {
  return (
    <div>
      <h3>Created At:</h3>
      <p>{proprs.order.created_at}</p>
      <button type="button" onClick={() =>{
          props.history.push(`/order/${props.order.id}`);
      }}>Details</button>
    </div>   
  );
};

export default OrderCard