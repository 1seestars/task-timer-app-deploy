import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import MainComponent from "./MainComponent";
import ScoreItem from "./ScoreItem";

const history = createBrowserHistory();

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route exact path="/" component={MainComponent} />
      <Route path="/:id" component={ScoreItem} />
    </Router>
  </Provider>
);

export default Root;
