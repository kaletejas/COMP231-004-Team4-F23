// AppointmentPage.js

import React from "react";
import { Link, useHistory } from "react-router-dom";

const AppointmentPage = () => {
  const history = useHistory();

  const handleSetReminder = () => {
    // Add your reminder functionality here
    alert("Reminder set successfully!");
  };

  const handleChangeDate = () => {
    // Navigate back to the Doctor page when Change Date is clicked
    history.goBack();
  };

  return (
    <div>
      <h2>Appointment Confirmed!</h2>
      <p>Your appointment has been scheduled successfully.</p>
      
      <ul>
        <li>
          <button onClick={handleSetReminder}>Set Reminder</button> <br/> <br/>
        </li>
        <li>
          <button onClick={handleChangeDate}>Change Date</button>
        </li>
      </ul>
    </div>
  );
};

export default AppointmentPage;
