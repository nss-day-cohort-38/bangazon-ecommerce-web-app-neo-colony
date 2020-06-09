import React from 'react'
import { Route, Redirect } from "react-router-dom";
import SearchResults from './search/SearchResults'
import Home from './home/Home'
import ProductDetails from './product/ProductDetails'
import Login from './auth/Login'
import Register from './auth/Register'
import Sell from './sell/Sell'
import Account from './account/Account';
import SellProductForm from './sell/SellForm';
import AddPayment from './payments/AddPayment'
import Categories from './categories/Categories'
import ProductListings from './listing/YourListing'
import PaymentTypeCard from './payments/PaymentTypeCard'

const AppViews = props => {

    return (
        <React.Fragment>
            <Route
                path="/search"
                render={props => {
                    return <SearchResults {...props} />
                }}
            />
            <Route
                path="/categories"
                render={props => {
                    return <Categories {...props} />
                }}
            />

            <Route
                exact
                path="/"
                render={props => {
                    return <Home />
                }}
            />
            <Route
                path="/account"
                render={props => {
                    return <Account />
                }}
            />
            <Route
                path="/account/addpayment"
                render={props => {
                    return <AddPayment
                        {...props}
                    />
                }}
            />
            <Route
                path="/sell"
                render={props => {
                    return <SellProductForm {...props}/>
                }}
            />
            <Route
                path="/myproducts"
                render={props => {
                    return <ProductListings {...props}/>
                }}
            />
            <Route
                path="/paymenttypes"
                render={props => {
                    return <PaymentTypeCard {...props}/>
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