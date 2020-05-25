import React from "react";
import { Switch, Route } from "react-router";
import { withRouter } from "react-router-dom";
import One from "./One";
import Two from "./Two";
import Error404 from "../Layout/Error";

function PartOne(props) {
  const { location } = props;

  return (
    <Switch location={location}>
      <Route exact path="/" component={One} />
      <Route path="/partone/one" component={One} />
      <Route path="/partone/two" component={Two} />

      <Route component={Error404} />
    </Switch>
  );
}

export default withRouter(PartOne);
