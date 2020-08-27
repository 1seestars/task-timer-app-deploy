import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import MainComponent from "./MainComponent";
import ScoreItem from "./ScoreItem";

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter basename="/">
      <Route exact path="/" component={MainComponent} />
      <Route path="/:id" component={ScoreItem} />
    </HashRouter>
  </Provider>
);

export default Root;
