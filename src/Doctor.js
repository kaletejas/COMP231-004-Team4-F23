// Doctor.js

import React, { useState } from "react";
import {Link, useHistory } from "react-router-dom";
import Calendar from "react-calendar";

const Doctor = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [previousAppointments, setPreviousAppointments] = useState([]);
  const [petHealthRecords, setPetHealthRecords] = useState([]);
  const [showAppointmentHistory, setShowAppointmentHistory] = useState(false);
  const [showHealthHistory, setShowHealthHistory] = useState(false);
  const history = useHistory();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    fetchAppointmentsAndHealthHistory(date);
  };

  const fetchAppointmentsAndHealthHistory = (date) => {
    // Simulated data fetching
    const appointmentsData = [
      { time: "10:00 AM", reason: "Annual Checkup" },
      { time: "2:30 PM", reason: "Vaccination" },
    ];

    const petHealthRecordsData = [
      { date: "2023-01-01", description: "Annual Checkup", notes: "Healthy, no issues" },
      { date: "2023-02-15", description: "Vaccination", notes: "No adverse reactions" },
      { date: "2023-05-20", description: "Dental Cleaning", notes: "Minor tartar buildup" },
    ];

    // Update state with fetched data
    setPreviousAppointments(appointmentsData);
    setPetHealthRecords(petHealthRecordsData);
  };

  const scheduleAppointment = () => {
    // Simulated appointment scheduling
    console.log(`Appointment scheduled for: ${selectedDate}`);
    // You can add real logic here, such as sending a request to a server.

    // Navigate to the confirmation page after scheduling
    history.push("/appointment");
  };

  const openAppointmentHistory = () => {
    setShowAppointmentHistory(true);
  };

  const closeAppointmentHistory = () => {
    setShowAppointmentHistory(false);
  };

  const openHealthHistory = () => {
    setShowHealthHistory(true);
  };

  const closeHealthHistory = () => {
    setShowHealthHistory(false);
  };

  return (
    <div>
      <h2>Schedule an Appointment</h2>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <p>Selected Date: {selectedDate.toDateString()}</p>

      <div>
        <button onClick={openAppointmentHistory}>Appointment History</button> <br/><br/>
        <button onClick={openHealthHistory}>Pet Health History</button> <br/><br/>
      </div>

      {showAppointmentHistory && (
        <div className="modal">
          <div className="modal-content">
            <h3>Appointment History</h3>
            {previousAppointments.length > 0 ? (
              <ul>
                {previousAppointments.map((appointment, index) => (
                  <li key={index}>
                    <strong>Time:</strong> {appointment.time},{" "}
                    <strong>Reason:</strong> {appointment.reason}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No previous appointments for the selected date.</p>
            )}
            <button onClick={closeAppointmentHistory}>Close</button>
          </div>
        </div>
      )}

      {showHealthHistory && (
        <div className="modal">
          <div className="modal-content">
            <h3>Pet Health History</h3>
            {petHealthRecords.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {petHealthRecords.map((record, index) => (
                    <tr key={index}>
                      <td>{record.date}</td>
                      <td>{record.description}</td>
                      <td>{record.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No pet health records for the selected date.</p>
            )}
            <button onClick={closeHealthHistory}>Close</button> <br/><br/>
          </div>
        </div>
      )}

      <button onClick={scheduleAppointment}>Schedule Appointment</button>
      <Link to="/PetPharmacy">Go to Pet Pharmacy</Link>
    </div>
    
  );
  
};

export default Doctor;
