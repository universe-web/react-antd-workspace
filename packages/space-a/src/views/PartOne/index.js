import React from "react";
import { withRouter } from "react-router-dom";
import One from "./One";
import Two from "./Two";
import { renderPageRoute } from "@root/utils/routerUtil";

const paths = [
  { path: "/partone/one", component: <One /> },
  { path: "/partone/two", component: <Two /> }
];
const defaultPage = <One />;
const defend = {
  "/partone/two": (from, to) => {
    if (5 > 3) {
      console.log(`from: ${from}, to: ${to}`);
      return <Two />;
    }
    return null;
  }
};

function PartOne() {
  return renderPageRoute(paths, defaultPage, false, defend);
}

/* <Switch>
  <Route exact path="/parttwo/one" component={One} />
  <Route exact path="/parttwo/two" component={Two} />
</Switch> */

export default withRouter(PartOne);
