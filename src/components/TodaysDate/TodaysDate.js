import * as React from "react";


/** This is a simple component which shows todays date */
const TodaysDate = () => <h1>{new Date().toString()}</h1>;

export default TodaysDate;