import React from 'react'
import { Route, Redirect } from "react-router-dom";
import SearchResults from './search/SearchResults'
import Home from './home/Home'
import ProductDetails from './product/ProductDetails'
import Login from './auth/Login'
import Register from './auth/Register'
import Sell from './sell/Sell'
import Order from './order/Order'
import Account from './account/Account';
import SellProductForm from './sell/SellForm';
import AddPayment from './payments/AddPayment'
import Categories from './categories/Categories'
import ProductListings from './listing/YourListing'
import PaymentTypeCard from './payments/PaymentTypeCard'

const ApplicationViews = props => {

    const hasUser = props.hasUser;
    const setUser = props.setUser;

    return (
        <React.Fragment>
            <Route
                path="/login"
                render={props => {
                    return <Login setUser={setUser} results={props.results} {...props} />
                }}
            />
            <Route path="/register" render={props => {
                return <Register setUser={setUser} {...props} />
            }}
            />
            <Route path="/search" render={props => {
                if (hasUser) {
                    return <SearchResults {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }}/>
            <Route path="/categories" render={props => {
                if (hasUser) {
                    return <Categories {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }}/>
            <Route exact path="/" render={props => {
                if (hasUser) {
                    return <Home />
                } else {
                    return <Redirect to="/login" />
                }
            }}/>
            <Route exact path="/account" render={props => {
                if (hasUser) {
                    return <Account />
                } else {
                    return <Redirect to="/login" />
                }
            }}/>
            <Route path="/account/addpayment" render={props => {
                if (hasUser) {
                    return <AddPayment {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }}/>
            <Route path="/sell" render={props => {
                if (hasUser) {
                    return <SellProductForm {...props}/>
                } else {
                    return <Redirect to="/login" />
                }
            }}/>

            <Route path="/cart" render={props => {
                if (hasUser) {
                    return <Order {...props}/>
                } else {
                    return <Redirect to="/login" />   
                }
            }}/>
            <Route path="/myproducts" render={props => {
                if (hasUser) {
                    return <ProductListings {...props}/>
                } else {
                    return <Redirect to="/login" />
                }
            }}/>
            <Route path="/paymenttypes" render={props => {
                if (hasUser) {
                    return <PaymentTypeCard {...props}/>
                } else {
                    return <Redirect to="/login" />
                }
            }}/>
            <Route exact path="/products/:productId(\d+)" render={props => {
                if (hasUser) {
                    return <ProductDetails
                        productId={parseInt(props.match.params.productId)}
                        {...props}
                    />
                } else {
                    return <Redirect to="/login" />
                }
            }}/>
        </React.Fragment>
    )
}

export default ApplicationViews