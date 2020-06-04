import React, {useState} from 'react'
import NavBar from './nav/NavBar'
import AppViews from './AppViews'

const BangazonApp = props => {

    const [keyword, setKeyword] = useState({ searchInput: "" });
    const [results, setResults] = useState([]);

    return (
        <>
        <NavBar results={results} setKeyword={setKeyword} setResults={setResults} keyword={keyword}/>
        <AppViews results={results}/>
        </>
    )

}

export default BangazonApp