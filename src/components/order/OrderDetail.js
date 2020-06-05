import React, {useState, useEffect} from "react";
import PaymnetList from '.paymenttype/PaymentTypeList';
import {Link} from 'react-router-dom';
import APIManager from '..modules/APIManager'

const OrderDetail = props => {
    const [paymentTypes, setPaymentType] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const paymentTypeHandler = async () => {
        const types = await APIManager.getAll('paymnettypes');
        setPaymentType(types);
    };

    const selectPaymentHandler = paymenttypeId => {
      const confirmPayment = window.confirm("Is this the payment you want to use?");

      if (confirmPayment) {
        props.addPayment(paymenttypeId);
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
        APIManager.delete(props.orderId).then(() =>
          props.history.push("/order")
        );

    return (
      <div>
        {paymentTypes.length > 0 ? (
          <div>
            <h3>Select Payment Method</h3>
            <PaymentTypeList
              select={selectPaymentHandler}
            />{' '}
          </div>
        ) : (
          <div>
            <h3>Add Payment</h3>
            <Link to="/paymenttype">Add Payment</Link>
          </div>
         )}
          <div>
            <button
              type="button"
              onClick={() => props.history.push(`/order/${props.orderId}/edit`)}
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
}

export default OrderDetail;