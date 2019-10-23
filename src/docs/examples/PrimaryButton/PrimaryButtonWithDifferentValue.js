import PrimaryButton from "../../../components/PrimaryButton";
import * as React from "react";

const PrimaryButtonExample1 = () => (
  <PrimaryButton
    id="primary-button"
    name="primary-button"
    text="Different Value"
    handleClick={e => alert(e.target.value)}
  />
);

export default PrimaryButtonExample1;
