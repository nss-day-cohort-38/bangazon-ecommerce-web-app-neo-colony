import React, {useState, useEffect} from 'react';

const CategoryCard = props => {

    const [fetched3, setFetched3] = useState("")

    const total = props.category.products.length()

    // const firstThree = () => {
    //     for(i=0,i<3,i++) {

    //     }
    // }

    return (
        <>
        <div>{props.category.name}</div>
        <div>{total}</div>
        {/* {props.category.products.map(res => <div>{res.title}</div>)} */}
        {props.category.products.map((value, index) => {
            return <div key={index}>{value.title}</div>
        })}
        </>
    )

}

export default CategoryCard