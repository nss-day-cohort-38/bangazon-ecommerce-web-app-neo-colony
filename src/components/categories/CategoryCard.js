import React, {useState, useEffect} from 'react';
import ProductDetails from '../product/ProductDetails';

const CategoryCard = props => {


    const total = props.category.products.length

    const first3 = props.category.products.slice(0, 3)

    return (
        <>
            <div className="categoryCard">
                <div className="info-stack">
                    <div>{props.category.name}</div>
                    <div className="total">({total})</div>
                </div>
                <div className="category-products">
                    {first3.map(res => <div key={res.id}>{res.title}</div>)}
                </div>
            </div>
        </>
    )

}

export default CategoryCard