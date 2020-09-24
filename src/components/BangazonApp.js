import React, {useState} from 'react'
import NavBar from './nav/NavBar'
import ApplicationViews from './AppViews'

const BangazonApp = props => {

  const isAuthenticated = () => sessionStorage.getItem("Token") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = (userId, token) => {
    sessionStorage.setItem("Id", JSON.stringify(userId));
    sessionStorage.setItem("Token", JSON.stringify(token));
    setHasUser(isAuthenticated());
  }

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }

    return (
        <>
            <NavBar clearUser={clearUser} hasUser={hasUser} />
            <ApplicationViews setUser={setUser} hasUser={hasUser} />
        </>
    )

}

export default BangazonApp