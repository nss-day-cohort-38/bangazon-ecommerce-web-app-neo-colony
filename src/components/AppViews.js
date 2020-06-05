import React from 'react'
import { Route, Redirect } from "react-router-dom";
import SearchResults from './search/SearchResults'
import Home from './home/Home'
import Profile from './account/Account'
import ProductDetails from './product/ProductDetails'
import Login from './auth/Login'
import Register from './auth/Register'
import Sell from './sell/Sell'

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
                path="/account"
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
                path="/products/:productId(\d+)"
                render={props => {
                    return <ProductDetails
                        productId={parseInt(props.match.params.productId)}
                        {...props}
                    />
                }} />

            <Route
                path="/login"
                render={props => {
                    return <Login results={props.results} {...props} />
                }}
            />

            <Route path="/register" render={props => {
                return <Register {...props} />
            }}
            />

        </React.Fragment>
    )
}

export default AppViews