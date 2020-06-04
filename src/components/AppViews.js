import React from 'react'
import { Route, Redirect } from "react-router-dom";
import SearchResults from './search/SearchResults'
import Home from './home/Home'
import Profile from './profile/Profile'

const AppViews = props => {

    return (
        <React.Fragment>
            <Route
            path="/search"
            render={props => {
                return <SearchResults results={props.results} {...props} />
            }}
            />
            
            <Route
            path="/"
            render={props => {
                return <Home results={props.results} {...props} />
            }}
            />
            <Route
            path="/profile"
            render={props => {
                return <Profile results={props.results} {...props} />
            }}
            />
            
        </React.Fragment>
    )
}

export default AppViews