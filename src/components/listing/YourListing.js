import React, { useState, useEffect } from "react";
import ApiManager from "../../modules/ApiManager";
import ProductCard from '../product/ProductCard'
import "../../styles/Listings.css"

const ProductListings = props => {
    const [myProducts, setMyProducts] = useState([])

    const getSellersProducts = () => {
        ApiManager.getAll("products?seller=true").then(resp => {
            setMyProducts(resp)
        })
    }

    useEffect(() => {
        getSellersProducts();
    }, [])

    return (
        <div className="listings">
            <div className="listings-header">
                <h1>Your Listings</h1>
            </div>
            {myProducts.length >= 1 ?
            myProducts.map(product => (
            <ProductCard 
                key={product.id}
                product={product}
                getSellersProducts={getSellersProducts}
            />
            )) : null}
        </div>
    )
}

export default ProductListings;