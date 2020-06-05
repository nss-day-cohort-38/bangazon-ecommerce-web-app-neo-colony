import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const Profile = Profile => {
    return (
        <>
            <h2>Profile</h2>
            <Link to="/account/addpayment"></Link>
        </>
    )
}

export default Profile