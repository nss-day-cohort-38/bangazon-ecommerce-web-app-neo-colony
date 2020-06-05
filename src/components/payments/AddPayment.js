import React, { useState } from "react";
import ApiManager from "../../modules/ApiManager";

const AddPayment = (props) => {
  const [paymenttype, setPaymenttype] = useState({
    merchant_name: "",
    account_number: "",
    expiration_date: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...paymenttype };
    stateToChange[evt.target.id] = evt.target.value;
    setPaymenttype(stateToChange);
  };

  const addPaymenttype = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const exp_date = new Date(paymenttype.expiration_date);
    const paymentTypeCopy = {
      merchant_name: paymenttype.merchant_name,
      account_number: paymenttype.account_number,
      expiration_date: exp_date,
    };

    ApiManager.create("paymenttypes", paymentTypeCopy).then(() => {
        props.history.push("/account")
    })
  };

  return (
    <form className="form--create-paymenttype" onSubmit={addPaymenttype}>
      <h1 className="h3 mb-3 font-weight-normal">Add a payment method</h1>
      <fieldset>
        <label htmlFor="merchant_name"> Merchant Name </label>
        <input
          onChange={handleFieldChange}
          type="text"
          id="merchant_name"
          placeholder="Merchant Name"
          required=""
          autoFocus=""
        />
      </fieldset>
      <fieldset>
        <label htmlFor="account_number"> Account Number </label>
        <input
          onChange={handleFieldChange}
          type="text"
          id="account_number"
          placeholder="Ex: 5555 5555 5555 5555"
          required=""
          autoFocus=""
        />
      </fieldset>
      <fieldset>
        <label htmlFor="expiration_date"> Expiration Date </label>
        <input
          onChange={handleFieldChange}
          type="date"
          id="expiration_date"
          required=""
          autoFocus=""
        />
      </fieldset>
      <fieldset>
        <button disabled={isLoading} type="submit">
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default AddPayment;
