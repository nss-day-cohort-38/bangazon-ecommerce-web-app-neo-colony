import React, { useState, useEffect } from "react";
import ApiManager from "../../modules/ApiManager";
import ProductCard from '../product/ProductCard'

const ProductListings = props => {
    const [myProducts, setMyProducts] = useState([])

    useEffect(() => {
        ApiManager.getAll("products?seller=true").then(resp => {
            setMyProducts(resp)
        })
    }, [])

    return (
        <div>
            {myProducts.map(product => (
            <ProductCard 
                key={product.id}
                product={product}
            />
            ))}
        </div>
    )
}

export default ProductListings;