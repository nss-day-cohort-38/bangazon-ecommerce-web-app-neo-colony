import React, {useState} from 'react'
import NavBar from './nav/NavBar'
import ApplicationViews from './AppViews'

const BangazonApp = props => {

  const isAuthenticated = () => sessionStorage.getItem("ecommerceapi-token") !== null;

  const [hasUser] = useState(isAuthenticated());

    return (
        <>
            <NavBar hasUser={hasUser} />
            <ApplicationViews hasUser={hasUser} />
        </>
    )

}

export default BangazonApp