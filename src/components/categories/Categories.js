import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import CategoryCard from './CategoryCard';
import '../../styles/Categories.css'

const Categories = props => {

    const [fetched, setFetched] = useState([])


    useEffect(() => {
        // fetchCategories();
        ApiManager.getAll("producttypes")
            .then(resp => {
                setFetched(resp)
            })
    }, [])

    return (
        <div className="categories">
            <div className="categoryHeader">
                <h1>Categories</h1>
            </div>
            {fetched.length >= 1 ?
            fetched.map(res => 
            <CategoryCard category={res} key={res.id} />
            ) : null}
        </div>
    )

}

export default Categories