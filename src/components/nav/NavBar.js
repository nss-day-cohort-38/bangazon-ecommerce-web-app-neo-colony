import React, { useState, useEffect } from 'react'
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
                <div>b a n g a z o n__d o t c o m</div>
                
                <input
                    id="searchInput"
                    type="text"
                    placeholder="search a product"
                    onChange={handleFieldChange}
                    onKeyUp={evt => evt.key === "Enter" ? handleSearch(evt) : null} />


            </div>
        </>
    )
}

export default NavBar