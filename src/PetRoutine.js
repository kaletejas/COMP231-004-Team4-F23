import React, { useState } from "react";
import "./app.css"; 

const PetRoutine = () => {
  const [exerciseRoutine, setExerciseRoutine] = useState("");
  const [routineList, setRoutineList] = useState([]);

  const handleAddRoutine = () => {
    if (exerciseRoutine.trim() !== "") {
      setRoutineList([...routineList, exerciseRoutine]);
      setExerciseRoutine("");
      alert("Exercise routine added successfully!");
    } else {
      alert("Please enter a valid exercise routine.");
    }
  };

  const handleGoBack = () => {
    // Navigate back to the AppointmentPage
    window.history.back();
  };

  return (
    <div className="pet-routine-container">
      <h2>Pet Exercise Routines</h2>

      <div className="input-section">
        <input
          type="text"
          value={exerciseRoutine}
          onChange={(e) => setExerciseRoutine(e.target.value)}
          placeholder="Enter exercise routine"
          className="pet-input"
        />
        <button onClick={handleAddRoutine} className="add-button">
          Add Routine
        </button>
      </div>

      <div className="routine-list">
        <h3>Exercise Routine List:</h3>
        <ul>
          {routineList.map((routine, index) => (
            <li key={index}>{routine}</li>
          ))}
        </ul>
      </div>

      <button onClick={handleGoBack}>Go Back to Appointment Page</button>
    </div>
  );
};

export default PetRoutine;
