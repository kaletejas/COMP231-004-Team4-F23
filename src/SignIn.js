import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './app.css';
const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if a role is selected
    if (!selectedRole) {
      alert("Please select a role before submitting.");
      return;
    }

    // Perform your sign-in logic here...
    // For simplicity, let's assume the sign-in is successful

    // Redirect to the "heropage"
    history.push("/heropage");
  };

  const handleDialogOpen = () => {
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    handleDialogClose(); // Close the dialog after selection
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br/> <br/> <br/>
        {/* Button to Open the Dialog Box */}
        <button type="button" onClick={handleDialogOpen}>
          Login Options
        </button>

        {/* Simple Dialog Box for Role Selection */}
        {showDialog && (
          <div className="dialog-box">
            <h2>Login Options</h2>
            <p>Select login as:</p>
            <button onClick={() => handleRoleSelection("pet-parent")}>
              Pet Parent
            </button>
            <button onClick={() => handleRoleSelection("doctor")}>Doctor</button>
            <button onClick={() => handleRoleSelection("pet-groomer")}>
              Pet Groomer
            </button>
          </div>
        )}

        {/* Submit Button */}
        <br/><br/><button type="submit">Submit</button>
      </form>

      {/* Display the selected role */}
      {selectedRole && <p>Selected Role: {selectedRole}</p>}
    </div>
  );
};

export default SignInForm;
