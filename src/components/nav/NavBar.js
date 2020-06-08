import React, { useState, useEffect } from 'react'
import { Link, withRouter } from "react-router-dom"
import '../../styles/NavBar.css'
import useSimpleAuth from "../auth/useSimpleAuth";


const NavBar = props => {

    const [keyword, setKeyword] = useState({ searchInput: "" });

    const { logout } = useSimpleAuth()

    const handleFieldChange = evt => {
        const stateToChange = { ...keyword };
        stateToChange[evt.target.id] = evt.target.value;
        setKeyword(stateToChange);
    };



    const handleSearch = (evt) => {
        console.log("search pressed")
        const stringArr = keyword.searchInput.split(" ").join("+");
        props.history.push({
            pathname: "/search",
            state: stringArr
        })


    }

    const handleLogout = () => {
        logout();
    }

    return (
        <>
            <div className="nav">
                <div className="navContent">
                    <input
                        id="searchInput"
                        className="nav-item searchBar"
                        type="text"
                        placeholder="search a product"
                        onChange={handleFieldChange}
                        onKeyUp={evt => evt.key === "Enter" ? handleSearch(evt) : null} />

                


                    <div id="nav-links" className="nav-links">
                        <Link className="nav-item" to="/">b a n g a z o n</Link>
                        <Link className="nav-item" to="/myproducts">my products</Link>
                        <Link className="nav-item" to="/sell">sell</Link>
                        <Link className="nav-item" to="/categories">categories</Link>
                        <Link className="nav-item" to="/account">account</Link>
                        <Link className="nav-item" to="/cart">cart</Link>
                        <Link onClick={handleLogout} className="nav-item" to="/login">logout</Link>
                    </div>
                </div>


            </div>
        </>
    )
}

export default withRouter(NavBar)