import React, { useState, useEffect } from 'react'
import ApiManager from '../../modules/ApiManager';

const MyAccount = (props) => {
    const [accountInfo, setAccountInfo] = useState("");
    const [isEditing, setIsEditing] = useState(false);
  
    const accountSettings = () => {
      ApiManager.getAll("customers").then(allUserData => {
          console.log(allUserData)
        const accountInfoObject = {
          id: allUserData.id,
          first_name: allUserData[0].user.first_name,
          last_name: allUserData[0].user.last_name,
          address: allUserData[0].address,
          phone: allUserData[0].phone_number,
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
              Edit();
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
    );
  };
  
  export default MyAccount;