import PrimaryButton from "../../../components/PrimaryButton";
import * as React from "react";

const PrimaryButtonExample1 = () => (
  <PrimaryButton
    id="primary-button"
    name="primary-button"
    text="Action Button Example"
    handleClick={() => alert(new Date())}
  />
);

export default PrimaryButtonExample1;
