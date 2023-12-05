// ContactForm.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./app.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here...
    console.log("Form submitted:", { name, email, message });
    // You can add further logic to send the form data to a server or perform any necessary actions.
  };

  return (
    <div className="contact-form">
      <h2>Contact Pet Trainer</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </form>
      {/* Back button to return to Trainer */}
      <Link to="/Trainer">
        <button className="back-button">Submit</button>
      </Link>
    </div>
  );
};

export default ContactForm;
