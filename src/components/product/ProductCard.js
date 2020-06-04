import React from 'react'

const ProductCard = props => {

    const seeDetails = () => {
        props.history.push(`/products/${props.product.id}`)
    }

    return (
        <>
            <container onClick={seeDetails}>
                <div>{props.product.title}</div>
                <div>{props.product.price}</div>
                <div>{props.product.quantity}</div>
            </container>
        </>
    )
}

export default ProductCard