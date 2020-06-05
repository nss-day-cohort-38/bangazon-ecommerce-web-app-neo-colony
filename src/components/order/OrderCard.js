import React from "react";
import OrderDetail from './OrderDetail'

const OrderCard = (props) => {
  return (
    <div>
      <h3>Created At:</h3>
      <p>{props.created_at}</p>
     <div>
      <button
        onClick={() => this.setState({ hidePayment: false })}>
        Complete Order
      </button>
      <button className="order-card-cancel-button">Cancel Order</button>
     </div>
     <div
      hidden={this.state.hidePayment}
      className="order-card-payment-options">
      <OrderDetail addPaymentToOrder={this.addPaymentToOrder} />
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