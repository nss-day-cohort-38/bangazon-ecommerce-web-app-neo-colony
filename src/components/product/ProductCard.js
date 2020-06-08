import React from 'react'
import {withRouter} from 'react-router-dom'

const ProductCard = props => {

    const seeDetails = () => {
        props.history.push(`/products/${props.product.id}`)
    }

    return (
        <>
            <section className="productCard" onClick={seeDetails}>
                <div>{props.product.title}</div>
                <div>{props.product.price}</div>
                <div>{props.product.quantity}</div>
            </section>
        </>
    )
}

export default withRouter(ProductCard)