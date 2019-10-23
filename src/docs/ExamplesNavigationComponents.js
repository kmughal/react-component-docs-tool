import React, { useRef } from "react";
import { Route } from "react-router-dom";
import ExampleComponentContainer from "./ExampleComponentContainer";
import ComponentCode from "./ComponentCode";

const ExamplesNavigationComponents = data => {
  let i = 0;
  return data.map((c, ci) => {
    return c.examples.map((e, ei) => {
      let path = `/${c.displayName}/${e.displayName}`;
      let exampleComponent = ExampleComponentContainer(
        require(`./examples/${c.displayName}/${e.displayName}`).default
      );
      console.log(e);
      return (
        <Route path={path} key={i++}>
          <h3>Output:</h3>
          {exampleComponent}
          <h3>Usage:</h3>
          {ComponentCode(e.contents)}
          <h3>Source code:</h3>
          <div key={i++}>{ComponentCode(c.code)}</div>
        </Route>
      );
    });
  });
};

export default ExamplesNavigationComponents;
