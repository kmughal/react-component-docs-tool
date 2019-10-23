import React from "react";
import PropTypes from "prop-types";

/** A component to add personal information of client */
const AddPersonalDetails = () => {
  return (
    <>
      <div className="form-group">
        <label>Title</label>
        <select className="form-control">
          <option></option>
          <option>Mr.</option>
          <option>Mrs.</option>
          <option>Miss.</option>
          <option>Dr.</option>
        </select>
      </div>
      <div className="form-group">
        <label>Firstname:</label>
       <input type="text" className="form-control" placeholder="Provide first name..."/>
      </div>
      <div className="form-group">
        <label>Lastname:</label>
       <input type="text" className="form-control" placeholder="Provide last name..."/>
      </div>
      <div className="form-group">
        <label>Age:</label>
       <input type="number" className="form-control" placeholder="Provide age..."/>
      </div>
    </>
  );
};

AddPersonalDetails.propTypes = {
  title: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  middleName: PropTypes,
  age: PropTypes.number
};

export default AddPersonalDetails;
