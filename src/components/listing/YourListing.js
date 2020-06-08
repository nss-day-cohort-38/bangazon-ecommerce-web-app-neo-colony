import React, { useState, useEffect } from "react";
import ApiManager from "../../modules/ApiManager";
import ProductCard from '../product/ProductCard'

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
        <div>
            {myProducts.map(product => (
            <ProductCard 
                key={product.id}
                product={product}
                getSellersProducts={getSellersProducts}
            />
            ))}
        </div>
    )
}

export default ProductListings;