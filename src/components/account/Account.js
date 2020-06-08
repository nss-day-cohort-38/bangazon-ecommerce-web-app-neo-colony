import React, { useState, useEffect } from 'react'
import ApiManager from '../../modules/ApiManager';

const MyAccount = (props) => {
    const [accountInfo, setAccountInfo] = useState("");
    const [isEditing, setIsEditing] = useState(false);
  
    const generateAccount = () => {
      ApiManager.getAll("customers").then(allUserData => {
        const accountInfoObject = {
          id: allUserData.id,
          first_name: allUserData.first_name,
          last_name: allUserData.last_name,
          address: allUserData.address,
          phone: allUserData.phone_number,
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
  
      ApiManager.update('customers', accountInfo.id, accountInfo).then(() => toggleEdit());
    };
  
    const toggleEdit = () => {
      if (props.editReset == true) {
        props.editReset = false;
        setIsEditing(false);
      } else {
      setIsEditing(!isEditing);
      }
    };
  
    useEffect(() => {
      if (accountInfo.id == "") {
        generateAccount();
      }
      if (props.editReset == true) {
        toggleEdit();
      }
    }, [props.editReset]);
  
    return !isEditing ? (
      <>
        <div className="content">
          <h1>My Account:</h1>
          <p>First Name: {accountInfo.first_name}</p>
          <p>Last Name: {accountInfo.last_name}</p>
          <p>Address: {accountInfo.address}</p>
          <p>Phone Number: {accountInfo.phone}</p>
        </div>
        <div className="content">
          <button
            type="button"
            onClick={() => {
              toggleEdit();
            }}
          >
            Edit
          </button>
        </div>
        <div className="content">
          <button
            type="button"
            onClick={() => {
              props.history.push({
                  pathname:"/paymenttypes",
                  state: {editReset: true},
              })
            }}
          >
            Edit Payment Options
          </button>
        </div>
        <div className="content">
          <button
            type="button"
            onClick={() => {
              props.history.push("/order");
            }}
          >
            View Order History
          </button>
        </div>
      </>
    ) : (
      <div className="content">
        <h1>Account Info:</h1>
        <button
          type="button"
          onClick={() => {
            toggleEdit();
          }}
        >
          Go Back
        </button>
        <p>First Name: {accountInfo.firstName}</p>
        <form onSubmit={updateAccount}>
          <fieldset>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="lastName"
              value={accountInfo.lastName}
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
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="phone"
              value={accountInfo.phone}
            />
          </fieldset>
          <fieldset>
            <button type="submit">Save Changes</button>
          </fieldset>
        </form>
      </div>
    );
  };
  
  export default MyAccount;

