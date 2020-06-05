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
    }


    return (
        <>
            <div>{fetchedDetails.id}</div>

            {/* <img src={require(`${fetchedDetails.image_path}`)} /> */}
            <div>{fetchedDetails.title}</div>
            <div>{fetchedDetails.price}</div>
            <div>{fetchedDetails.description}</div>
            <div>{fetchedDetails.location}</div>
            <div>{fetchedDetails.quantity}</div>
            <button onClick={addToOrder}>Add To Order</button>
        </>
    )
}

export default ProductDetails