import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Account.css"

const Profile = (Profile) => {
  return (
    <>
      <div className="profileContainer">
        <h2>Profile</h2>
        <Link to="/account/addpayment">
          <button>Add Payment</button>
        </Link>
      </div>
    </>
  );
};

export default Profile;
