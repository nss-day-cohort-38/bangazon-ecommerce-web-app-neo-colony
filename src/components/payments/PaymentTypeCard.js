import React, { useState } from "react";

const PaymentTypeCard = (props) => {
    return (
        <div>
            <h2>Merchant Name: {props.paymentMethod.merchant_name}</h2>
        </div>
    )
}

export default PaymentTypeCard;