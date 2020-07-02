import React from "react";
import { Switch, Route } from "react-router";
import { withRouter } from "react-router-dom";
import Pie from "./Pie";
import Line from "./Line";
import Error404 from "../Layout/Error";

function Visual(props) {
  const { location } = props;

  return (
    <Switch location={location}>
      <Route exact path="/" component={Pie} />
      <Route path="/visual/pie" component={Pie} />
      <Route path="/visual/line" component={Line} />

      <Route component={Error404} />
    </Switch>
  );
}

export default withRouter(Visual);
