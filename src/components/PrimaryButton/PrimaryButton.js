import React from "react";
import PropTypes from "prop-types";

/** Primary Button Component */

const PrimaryButton = ({ id, name, text,handleClick }) => (
  <button id={id} name={name} className="btn btn-primary" onClick={(e) => handleClick(e) }>
    {text}
  </button>
);

PrimaryButton.propTypes = {
  /** 
    text: property is required. This property will become the caption of the button.
   */
  text: PropTypes.string.isRequired,
  
  /** 
    id: id is important. This property is also used in the integration tests
   */
  id: PropTypes.string.isRequired,
  /** 
    name: As per standard better to provide the name
   */
  name: PropTypes.string.isRequired,

  /**
    handleClick: Func
   */
  handleClick: PropTypes.func.isRequired
};

// PrimaryButton.defaultProps = {
//   text: "Login",
//   id: "sign-button",
//   name: "sign-button"
// };

export default PrimaryButton;
