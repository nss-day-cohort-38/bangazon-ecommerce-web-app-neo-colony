import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import './NavBar.css'

const NavBar = props => {

    const handleFieldChange = evt => {
        const stateToChange = { ...props.keyword };
        stateToChange[evt.target.id] = evt.target.value;
        props.setKeyword(stateToChange);
    };

    const handleSearch = (evt) => {
        console.log("search pressed")


        const stringArr = props.keyword.searchInput.split(" ").join("+");

        fetch(`http://localhost:8000/products?title=${stringArr}`)
            .then(resp => resp.json())
            .then(searchResults => {
                props.setResults(searchResults);
                console.log(props.keyword.searchInput)
                console.log(props.results)

            });
    };

    return (
        <>
            <div className="nav">
                <input
                    id="searchInput"
                    className="nav-item"
                    type="text"
                    placeholder="search a product"
                    onChange={handleFieldChange}
                    onKeyUp={evt => evt.key === "Enter" ? handleSearch(evt) : null} />
                <div>


                    <div id="nav-links">
                        <Link className="nav-item" to="/">b a n g a z o n</Link>
                        <Link className="nav-item" to="/sell">sell</Link>
                        <Link className="nav-item" to="/account">account</Link>
                        <Link className="nav-item" to="/cart">cart</Link>
                        <Link className="nav-item" to="/login">logout</Link>
                    </div>
                </div>


            </div>
        </>
    )
}

export default NavBar