import React, { useState } from "react";
import ApiManager from "../../modules/ApiManager";

const PaymentTypeCard = (props) => {
    const handleDelete = () => {
        ApiManager.delete("paymenttypes", props.paymentMethod.id)
            .then(props.history.push("/account"));
    }

    return (
        <div className="paymentTypeCard">
            <h2>{props.paymentMethod.merchant_name}</h2>
            <p>Card Number: {props.paymentMethod.account_number}</p>
            <p>Expiration Date: {props.paymentMethod.expiration_date}</p>
            <button onClick={handleDelete}>Delete Payment Method</button>
        </div>
    )
}

export default PaymentTypeCard;