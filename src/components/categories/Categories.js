import React, {useState, useEffect} from 'react';
import ApiManager from '../../modules/ApiManager';
import CategoryCard from './CategoryCard';

const Categories = props => {

    const [fetched, setFetched] = useState("")
    

    const fetchCategories = () => {
        ApiManager.getAll("producttypes")
        .then(resp => {
            console.log(resp, "RESP")
            setFetched(resp)
            console.log(fetched)
        })
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <div>
            {/* {fetched.map(res => <CategoryCard category={res} key={res.id}/>)} */}
            </div>
    )

}

export default Categories