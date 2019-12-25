import React from "react";
// import { Switch, Route } from "react-router";
import ErrorPage from "./Error";
import PartOne from "./../PartOne/index";
import PartTwo from "./../PartTwo/index";
import {
  createRouter,
  createDefend,
  renderRoute
} from "@root/utils/routerUtil";

const paths = [
  { path: "/partone", component: <PartOne /> },
  { path: "/parttwo", component: <PartTwo /> }
];
const Default_Page = <PartOne />;
const Error_Page = <ErrorPage />;

var id = 10001;
createDefend("/parttwo", () => {
  if (!id) {
    return <ErrorPage />;
  }

  return <PartTwo />;
});

createRouter(paths, Default_Page, Error_Page);

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
