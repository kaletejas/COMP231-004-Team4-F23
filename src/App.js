import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import Navbar from "./Navbar";
import Heropage from "./Heropage";
import Profile from "./Profile";
import Doctor from "./Doctor";
import SignIn from "./SignIn";
import ContactForm from "./ContactForm";
import Trainer from "./Trainer";
import Appointment from "./Appointment";
import PetRoutine from "./PetRoutine";

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
              <Doctor />
            </Route>
            <Route exact path="/SignIn">
              <SignIn onSignIn={handleSignIn} /> {/* Pass onSignIn prop */}
            </Route>
            <Route exact path="/ContactForm">
              <ContactForm />
            </Route>
            <Route exact path="/Trainer">
              <Trainer />
            </Route>
            <Route exact path="/Appointment">
              <Appointment />
            </Route>
            <Route exact path="/PetRoutine">
              <PetRoutine />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
