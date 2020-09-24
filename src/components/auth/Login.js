import React, { useState } from "react"
import LoginManager from "../../modules/AuthManager"

const Login = props => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = evt => {
    evt.preventDefault();
    
    if (credentials.username === "") {
      window.alert("Please enter a valid username");
    } else {
      LoginManager.loginUser(credentials).then(resp => {
        if (resp.valid) {
          props.setUser(resp.userId, resp.token);
          props.history.push("/");
        } else {
            window.alert("Invalid username or password")
        }
      });
    }
  };

  return (
    <form className="form--login" onSubmit={handleLogin}>
      <h1 className="h3 mb-3 font-weight-normal">Login to use bangazon_dotcom</h1>
      <fieldset>
        <label htmlFor="username"> Username </label>
        <input onChange={handleFieldChange} type="text"
          id="username"
          placeholder="Username"
          required="" autoFocus="" value={credentials.username}/>
      </fieldset>
      <fieldset>
        <label htmlFor="password"> Password </label>
        <input onChange={handleFieldChange} type="password"
          id="password"
          placeholder="Password"
          required="" autoFocus="" value={credentials.password}/>
      </fieldset>
      <fieldset>
        <button type="submit">
          Login
        </button>
        <button onClick={() => props.history.push("/register")}>
          Register
        </button>
      </fieldset>
    </form>
  )
}

export default Login;
