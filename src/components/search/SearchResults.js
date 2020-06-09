import React, { useState, useEffect } from 'react'
import ProductCard from '../product/ProductCard'
import ApiManager from '../../modules/ApiManager'
import "../../styles/Search.css"

const SearchResults = props => {

    const [sResults, setSearchResults] = useState([]);


    const handleSearch = (evt) => {

        const stringArr = props.location.state

        ApiManager.queryProducts("title", stringArr)
            .then(searchResults => {
                setSearchResults(searchResults);
            })
    }

    useEffect(() => {
        handleSearch()
    }, [props.location.state])

    return (
        <div className="resultsContainer">
            <div className="results-header">
                <h1>Product Results</h1>
            </div>
            {sResults.map(res => <ProductCard product={res} key={res.id}/>)}
        </div>
    )
}

export default SearchResults