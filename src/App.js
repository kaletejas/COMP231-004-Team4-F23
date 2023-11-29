import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import Navbar from "./Navbar";
import Heropage from "./Heropage";
import Profile from "./Profile";
import SignIn from "./SignIn";

function App() {
  const handleSignIn = () => {
    // Perform sign-in logic here...
    console.log("Signing in...");
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="heropage">
          <Switch>
            <Route exact path="/heropage">
              <Heropage />
            </Route>
            <Route exact path="/Profile">
              <Profile />
            </Route>
            <Route exact path="/Doctor">
              <Profile />
            </Route>
            <Route exact path="/SignIn">
              <SignIn onSignIn={handleSignIn} /> {/* Pass onSignIn prop */}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
