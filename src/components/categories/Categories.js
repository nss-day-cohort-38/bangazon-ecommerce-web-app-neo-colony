import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import CategoryCard from './CategoryCard';

const Categories = props => {

    const [fetched, setFetched] = useState([])


    useEffect(() => {
        // fetchCategories();
        ApiManager.getAll("producttypes")
            .then(resp => {

                setFetched(resp)

                console.log(resp, "RESP, LINE 16")
                console.log(fetched, "LINE 17")
            })
    }, [])

    return (
        <div>
            {fetched.map(res => <CategoryCard category={res} key={res.id} />)}
            {/* {fetched[0].name} */}
        </div>
    )

}

export default Categories