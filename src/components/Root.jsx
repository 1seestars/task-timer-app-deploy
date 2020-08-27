import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainComponent from "./MainComponent";
import ScoreItem from "./ScoreItem";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route
        exact
        path="/https://1seestars.github.io/task-timer-app-deploy/"
        component={MainComponent}
      />
      <Route
        path="/https://1seestars.github.io/task-timer-app-deploy/:id"
        component={ScoreItem}
      />
    </Router>
  </Provider>
);

export default Root;
