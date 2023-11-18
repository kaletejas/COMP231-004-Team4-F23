import React from "react";
import { ReactComponent as PetsPaw } from "./pets_paw.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        Pets
        <PetsPaw />
      </h1>
      {/* <div className="links">
        <a href="/profile">Profile</a>
        <a href="/Vet">Doctor Saab</a>
        <a href="/food">Food Dada</a>
      </div> */}

      <button type="submit">Sign in</button>
    </nav>
  );
};

export default Navbar;
