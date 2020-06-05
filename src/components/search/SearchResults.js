import React, {useEffect} from 'react'
import ProductCard from '../product/ProductCard'

const SearchResults = props => {

    console.log(props.location.state.product)

    useEffect(() => {
        

    }, [])

    return (
        <div>
            {props.location.state.product.map(res => <ProductCard product={res} />)}
        </div>
    )
}

export default SearchResults