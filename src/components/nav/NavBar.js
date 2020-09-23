import React, { useState } from 'react'
import { Link, withRouter } from "react-router-dom"
import '../../styles/NavBar.css'


const NavBar = props => {

    const [keyword, setKeyword] = useState({ searchInput: "" });

    const hasUser = props.hasUser;
    const clearUser = props.clearUser;

    const handleFieldChange = evt => {
        const stateToChange = { ...keyword };
        stateToChange[evt.target.id] = evt.target.value;
        setKeyword(stateToChange);
    };

    const handleSearch = (evt) => {
        const stringArr = keyword.searchInput.split(" ").join("+");
        props.history.push({
            pathname: "/search",
            state: stringArr
        })
    }

    return (
        <>
            <div className="nav">
                <div className="navContent">
                    <div id="nav-links" className="nav-links">
                        <Link className="nav-item" to="/">b a n g a z o n</Link>
                        <Link className="nav-item" to="/myproducts">my products</Link>
                        <Link className="nav-item" to="/sell">sell</Link>
                        <Link className="nav-item" to="/categories">categories</Link>
                        <Link className="nav-item" to="/account">account</Link>
                        <Link className="nav-item" to="/cart">cart</Link>
                        {hasUser ? <Link onClick={clearUser} className="nav-item" to="/login">logout</Link> 
                        : null}
                    </div>

                    {hasUser ? (
                        <input
                        id="searchInput"
                        className="nav-item searchBar"
                        type="text"
                        placeholder="search a product"
                        onChange={handleFieldChange}
                        onKeyUp={evt => evt.key === "Enter" ? handleSearch(evt) : null} />
                    ) : null}
                </div>


            </div>
        </>
    )
}

export default withRouter(NavBar)