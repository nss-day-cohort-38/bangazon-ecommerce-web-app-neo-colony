import React, { useState } from "react";
import ApiManager from "../../modules/ApiManager";

const PaymentTypeCard = (props) => {

    const handleDelete = () => {
        ApiManager.delete("paymenttypes", props.paymentMethod.id).then(() => {
            props.getPaymentMethods()
        })
    }

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    return (
        <div className="paymentTypeCard">
            <h2>{props.paymentMethod.merchant_name}</h2>
            <p>Card Number: {props.paymentMethod.account_number}</p>
            <p>Expiration Date: {formatDate(props.paymentMethod.expiration_date)}</p>
            <button onClick={handleDelete}>Delete Payment Method</button>
        </div>
    )
}

export default PaymentTypeCard;