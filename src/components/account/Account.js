import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Account.css"
import ApiManager from "../../modules/ApiManager"

const Account = (props) => {
    const [accountInfo, setAccountInfo] = useState("");
    const [isEditing, setIsEditing] = useState(false);
  
    const accountSettings = () => {
      ApiManager.getAll("customers").then(allUserData => {
        const accountInfoObject = {
          id: allUserData[0].id,
          first_name: allUserData[0].user.first_name,
          last_name: allUserData[0].user.last_name,
          address: allUserData[0].address,
          phone_number: allUserData[0].phone_number,
          email: allUserData[0].user.email
        };
        setAccountInfo(accountInfoObject);
      });
    };
  
    const handleFieldChange = (evt) => {
      const stateToChange = { ...accountInfo };
      stateToChange[evt.target.id] = evt.target.value;
      setAccountInfo(stateToChange);
    };
  
    const updateAccount = (evt) => {
      evt.preventDefault();
  
      ApiManager.update('customers', accountInfo.id, accountInfo).then(() => Edit());
    };
  
    const Edit = () => {
      if (props.editReset == true) {
        props.editReset = false;
        setIsEditing(false);
      } else {
      setIsEditing(!isEditing);
      }
    };
  
    useEffect(() => {
    accountSettings();
      
    if (props.editReset == true) {
        Edit();
      }
    }, [props.editReset]);
  
    return !isEditing ? (
      <>
        <div className="profileContainer">
          <h1>My Account:</h1>
          <div className="profileCard">
            <div className="content">
              <p>First Name: {accountInfo.first_name}</p>
              <p>Last Name: {accountInfo.last_name}</p>
              <p>Address: {accountInfo.address}</p>
              <p>Phone Number: {accountInfo.phone_number}</p>
            </div>
            <div className="content">
              <button
                type="button"
                onClick={() => {
                  Edit();
                }}
              >
                Edit
              </button>
              <Link to="/account/addpayment">
                <button>Add Payment</button>
              </Link>
            </div>
            <div className="content">
              {/* <button
                type="button"
                onClick={() => {
                  props.history.push({
                      pathname:"/paymenttypes",
                      state: {editReset: true},
                  })
                }}
              >
                Edit Payment Options
              </button> */}
            </div>
            <div className="content">
              {/* <button
                type="button"
                onClick={() => {
                  props.history.push("/order");
                }}
              >
                View Order History
              </button> */}
            </div>
          </div>  
        </div>
      </>
    ) : (
      <div className="profileContainer">
        <h1>Account Info:</h1>
        <div className="profileCard">
          <div className="content">
            <form onSubmit={updateAccount}>
            <fieldset>
                <label htmlFor="first_name">First Name:</label>
                <input
                  type="text"
                  required
                  onChange={handleFieldChange}
                  id="first_name"
                  value={accountInfo.first_name}
                />
              </fieldset>

              <fieldset>
                <label htmlFor="last_name">Last Name:</label>
                <input
                  type="text"
                  required
                  onChange={handleFieldChange}
                  id="last_name"
                  value={accountInfo.last_name}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  required
                  onChange={handleFieldChange}
                  id="address"
                  value={accountInfo.address}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="phone_number">Phone Number:</label>
                <input
                  type="text"
                  required
                  onChange={handleFieldChange}
                  id="phone_number"
                  value={accountInfo.phone_number}
                />
              </fieldset>
              <fieldset>
                <button type="submit">Update </button>
                <button
              type="button"
              onClick={() => {
                Edit();
              }}
            >
            Back
            </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Account;