import React from "react";
import { Route } from "react-router";
import ErrorPage from "./Error";
import PartOne from "./../PartOne/index";
import PartTwo from "./../PartTwo/index";
import {
  createRouter,
  createDefend,
  renderRoute
} from "@root/utils/routerUtil";

const paths = [
  { path: "/", component: PartOne },
  { path: "/partone", component: PartOne },
  { path: "/parttwo", component: PartTwo },
  { component: ErrorPage }
];

createRouter(paths);
createDefend({
  "/parttwo": (from, to) => {
    if (5 > 3) {
      return <Route component={PartTwo} />;
    }
    return <Route component={ErrorPage} />;
  }
});

function Router(props) {
  const { pathname } = props.location;

  return renderRoute(pathname);
}

/* <Switch location={location}>
    <Route exact path="/" component={PartOne} />
    <Route path="/partone" component={PartOne} />
    <Route path="/parttwo" component={PartTwo} />

    <Route component={ErrorPage} />
  </Switch> */

export default Router;
