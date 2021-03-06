import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Booked from "./pages/Booked"
import Explore from "./pages/Explore"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import CreateAccount from "./pages/CreateAccount"
import Verify from "./pages/Verify"

import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">    
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/booked" component={Booked} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/create" component={CreateAccount} />
          <Route exact path="/verify" component={Verify} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
