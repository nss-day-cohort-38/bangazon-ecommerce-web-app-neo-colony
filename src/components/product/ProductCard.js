import React from 'react'
import {withRouter} from 'react-router-dom'
import ApiManager from '../../modules/ApiManager'
import "../../styles/Product.css"

const ProductCard = props => {

    const seeDetails = () => {
        props.history.push(`/products/${props.product.id}`)
    }

    const handleDelete = () => {
        ApiManager.delete("products", props.product.id).then(() => {
            props.getSellersProducts()
        })
    }

    return (
        <>
            <section className="productCard" onClick={seeDetails} >
                <div className="productInfo" >
                    <div>{props.product.title}</div>
                    <div>Price: ${props.product.price}</div>
                    <div>Quantity: {props.product.quantity}</div>
                </div>
                {props.getSellersProducts ?
                    <button onClick={handleDelete}>Delete</button> 
                 : null} 
            </section>
        </>
    )
}

export default withRouter(ProductCard)