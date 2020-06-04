import React from 'react'
import { Route, Redirect } from "react-router-dom";
import SearchResults from './search/SearchResults'
import Home from './home/Home'
import Profile from './account/Account'
import ProductDetails from './product/ProductDetails'

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
                    return <Home />
                }}
            />
            <Route
                path="/profile"
                render={props => {
                    return <Profile />
                }}
            />
            <Route
                path="/profile"
                render={props => {
                    return <Profile />
                }}
            />
            <Route
                path="/sell"
                render={props => {
                    return <Sell />
                }}
            />
            <Route
                exact
                path="products/:productId(\d+)"
                render={props => {
                    <ProductDetails
                        productId={parseInt(props.match.params.productId)}
                        {...props}
                    />

                }} />

        </React.Fragment>
    )
}

export default AppViews