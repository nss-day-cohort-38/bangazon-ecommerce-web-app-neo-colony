import React, {useState, useEffect} from "react";
import OrderCard from "./OrderCard";
import APIManager from "../modules/APIManager";

const OrderList = (props) => {
  const [orders, setOrders] = useState([]);

  const getOrders = () => {
    return APIManager.getAll().then((ordersFromAPI) => {
      setOrders(ordersFromAPI);
    });
  };

  useEffect(() => {
    getOrders();
  }, []);

 return(
   <div>
   <div> <button 
          type="button" 
          onClick={() => {
            props.history.push(`/neworder`);
          }}
          >Create New Order
          </button> </div>
        <div>
          {orders.map((order) =>(
              <OrderCard key={orderid} order={order} {...props} />
          ))}
        </div>
       </div>
  );
};
export default OrderList