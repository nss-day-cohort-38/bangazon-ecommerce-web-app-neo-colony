import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import ApiManager from '../../modules/ApiManager'

const ProductDetails = props => {

    const [fetchedDetails, setFetchedDetails] = useState("")


    const getDetails = (route, productId) => {
        ApiManager.getOne(route, productId)
            .then(res => setFetchedDetails(res))
    }

    useEffect(() => {
        getDetails("products", props.productId)
    }, [])

    const addToOrder = () => {
        const newOrderProduct = {
            product_id: fetchedDetails.id
        }

        ApiManager.create("orderproducts", newOrderProduct)
        .then(props.history.push("/"))

        fetchedDetails.quantity -= 1

        ApiManager.update("products", fetchedDetails.id, fetchedDetails)
    }


    return (
        <>
            <div className="productDetails">
                <div className="detailsHeader">
                    <h1>Details</h1>
                </div>
                <div className="productCard">
                {/* <img src={require(`${fetchedDetails.image_path}`)} /> */}
                    <div>{fetchedDetails.title}</div>
                    <div>{fetchedDetails.price}</div>
                    <div>{fetchedDetails.description}</div>
                    <div>{fetchedDetails.location}</div>
                    <div>quantity: {fetchedDetails.quantity}</div>
                    <button onClick={addToOrder}>Add To Order</button>
                </div>
            </div>
        </>
    )
}

export default ProductDetails