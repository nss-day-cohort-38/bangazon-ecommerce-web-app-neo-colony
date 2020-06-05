import React, { useState } from "react";

const PaymentTypeCard = (props) => {
    return (
        <div className="paymentTypeCard">
            <h2>Merchant Name: {props.paymentMethod.merchant_name}</h2>
            <p>Card Number: {props.paymentMethod.account_number}</p>
            <p>Expiration Date: {props.paymentMethod.expiration_date}</p>
        </div>
    )
}

export default PaymentTypeCard;