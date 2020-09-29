import React, {useState, useEffect} from "react";
import AddPayment from '../payments/AddPayment';
import {Link} from 'react-router-dom';
import ApiManager from '../../modules/ApiManager'

const OrderDetail = props => {
    const [paymentTypes, setPaymentType] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const paymentTypeHandler = async () => {
        const types = await ApiManager.getAll('paymenttypes');
        setPaymentType(types);
    };

    const selectPaymentHandler = paymenttypeId => {
      const confirmPayment = window.confirm("Is this the payment you want to use?");

      if (confirmPayment) {
        props.AddPayment(paymenttypeId);
      }
    };

    useEffect(() => {
      const getPaymentTypes = async () => {
        await paymentTypeHandler();
      };
      getPaymentTypes();
    }, []);

    const handleDelete = () => {
        setIsLoading(true);
        ApiManager.delete(props.orderId).then(() =>
          props.history.push("/order")
        );
    }

    return (
      <div>
          <div>
            <h3>Add Payment</h3>
            <Link to="/paymenttypes">Add Payment</Link>
          </div>
          <div>
            <button
              type="button"
              onClick={() => props.history.push(`/`)}
            >
              Complete Order
            </button>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
              Cancel Order
            </button>
          </div>
      </div>
    );
 };


export default OrderDetail;