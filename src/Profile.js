import React from "react";
import Calendar from "react-calendar";

const Profile = () => {
  return (
    <>
      <div className="profile-nav">
        <ul>
          <li>Pet</li>
          <li>Doctor </li>
          <li>Food</li>
        </ul>
      </div>

      <div>
        <form action="" className="proform">
          <label htmlFor="">Parent Name</label>
          <input type="text" name="name" />
          <label htmlFor="">Parent Age</label>
          <input type="text" name="age" />
          <label htmlFor="">Pet's Name</label>
          <input type="text" name="petname" />
          <label htmlFor="">Pet's Age</label>
          <input type="text" name="petage" />
          <label htmlFor="">Breed type</label>
          <select name="" id="">
            <option value="lab">Labrador Retriever</option>
            <option value="gr">Golden Retriever</option>
          </select>
          <label htmlFor="">Weight in Kg</label>
          <input type="number" name="weight" />
          <label>Food</label>
          <select name="" id="">
            <option value="Drools">Drools</option>
            <option value="RC">Royal Canin</option>
            <option value="Pedigree">Pedigree</option>
          </select>
          <label htmlFor="">Vaccination Details</label>
          <input type="text" />
        </form>
      </div>

      <div className="card-flex">
        <p className="card"> No of Vaccinations</p>
        <p className="card"> Current Doctor</p>
        <p className="card"> Current Vendor</p>
        <p className="card"> Current Food</p>
        <p className="card"> Current Diet</p>
      </div>
      <Calendar className="cal" />
    </>
  );
};

export default Profile;
