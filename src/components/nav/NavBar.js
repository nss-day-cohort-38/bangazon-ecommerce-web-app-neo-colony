import React from 'react'

const NavBar = props => {

    return (
        <>
            <input 
            type="text" 
            placeholder="search a product"
            onChange={props.handleFieldChange}
            onKeyUp={evt => evt.key === "Enter" ? props.handleSearch(evt) : null}/>
            
            <div>NavBar</div>
        </>
    )
}

export default NavBar