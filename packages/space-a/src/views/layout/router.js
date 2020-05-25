import React from "react";
import { Switch, Route } from "react-router";
import Error404 from "./Error";
import PartOne from "@root/views/PartOne";
import Loadable from "react-loadable";
import Loading from "./Loadding";

const PartTwo = Loadable({
  loader: () => import("../PartTwo/index"),
  loading: Loading,
});

function Router(props) {
  const { location } = props;

  return (
    <Switch location={location}>
      <Route exact path="/" component={PartOne} />
      <Route path="/partone" component={PartOne} />
      <Route path="/parttwo" component={PartTwo} />

      <Route component={Error404} />
    </Switch>
  );
}

export default Router;
