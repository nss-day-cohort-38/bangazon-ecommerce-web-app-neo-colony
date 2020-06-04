import React, {useEffect} from 'react'
import ProductCard from './ProductCard'

const SearchResults = props => {

    console.log("in SearchResults")

    useEffect(() => {
        

    }, [props.results])

    return (
        <div>
            {props.results.map(res => <ProductCard product={res} />)}
        </div>
    )
}

export default SearchResults