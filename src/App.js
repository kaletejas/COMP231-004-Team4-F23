import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import Navbar from "./Navbar";
import Heropage from "./Heropage";
import Profile from "./Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="heropage">
          <Switch>
            <Route exact path="/">
              <Heropage />
            </Route>
            <Route exact path="/Profile">
              <Profile />
            </Route>
            <Route exact path="/Doctor">
              <Profile />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
