import * as React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import {createBrowserHistory} from "history"
import ExamplesNavigationComponents from "./ExamplesNavigationComponents";
import ExamplesNavigationList from "./ExamplesNavigationList";

import data from "../config/component-metadata";

const Docs = () => {
  let history = createBrowserHistory();
  return (
    <>
      <h1>Atomic Design Example</h1>
      <Router history={history}>
        {ExamplesNavigationList(data)}
        <div className="container">
          <Switch>{ExamplesNavigationComponents(data)}</Switch>
        </div>
      </Router>
    </>
  );
};

export default Docs;
