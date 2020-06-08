import React, {useState, useEffect} from "react";
import OrderCard from "./OrderCard";
import APIManager from "../../modules/ApiManager";

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
            props.history.push(`/orders`);
          }}
          >Create New Order
          </button> </div>
        <div>
          {orders.map((order) =>(
              <OrderCard key={order.id} order={order} {...props} />
          ))}
        </div>
       </div>
  );
};
export default OrderList