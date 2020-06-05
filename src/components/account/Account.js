import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = (Profile) => {
  return (
    <>
      <h2>Profile</h2>
      <Link to="/account/addpayment">
        <button>Add Payment</button>
      </Link>
    </>
  );
};

export default Profile;
