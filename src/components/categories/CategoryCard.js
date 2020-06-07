import React, {useState, useEffect} from 'react';
import ProductDetails from '../product/ProductDetails';

const CategoryCard = props => {


    const total = props.category.products.length

    const first3 = props.category.products.slice(0, 3)

    return (
        <>
        
        <div>{props.category.name}</div>
        <div>{total}</div>
        {first3.map(res => <div>{res.title}</div>)}
        
        </>
    )

}

export default CategoryCard