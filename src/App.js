import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";
import Login from "./components/authentic/Login";
const onAuthRequired = ({ history }) => {
  history.push("/login");
};
const App = () => {
  return (
    <Router>
      <Security
        issuer='https://dev-324829.okta.com/oauth2/default'
        clientId='0oa2bu0gghCs2DG23357'
        redirectUri={window.location.origin + "/implicit/callback"}
        onAuthRequired={onAuthRequired}
        pkce={true}
      >
        <div className='App'>
          <Navbar />
          <div class='container'>
            <Route exact path='/' component={Home} />
            <SecureRoute exact path='/staff' component={Staff} />
            <Route
              path='/login'
              render={() => <Login baseUrl='https://dev-324829.okta.com' />}
            />
            <Route path='/implicit/callback' component={ImplicitCallback} />
          </div>
        </div>
      </Security>
    </Router>
  );
};

export default App;
