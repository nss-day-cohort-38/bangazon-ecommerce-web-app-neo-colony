import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import ApiManager from '../../modules/ApiManager'

const ProductDetails = props => {

    const [fetchedDetails, setFetchedDetails] = useState([])



    ApiManager.getOne("products", props.productId)
        .then(res => setFetchedDetails(res))




    return (
        <>
            <div type="hidden" value={`${fetchedDetails.id}`}></div>

            <img src={require(`${fetchedDetails.image_path}`)} />
            <div>{fetchedDetails.title}</div>
            <div>{fetchedDetails.price}</div>
            <div>{fetchedDetails.description}</div>
            <div>{fetchedDetails.location}</div>
            <div>{fetchedDetails.quantity}</div>
            <div>{fetchedDetails.location}</div>
        </>
    )
}

export default ProductDetails