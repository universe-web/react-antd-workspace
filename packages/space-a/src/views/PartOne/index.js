import React from "react";
import { withRouter } from "react-router-dom";
import One from "./One";
import Two from "./Two";
import { renderPageRoute } from "@root/utils/routerUtil";

const paths = [
  { path: "/", component: One },
  { path: "/partone/one", component: One },
  { path: "/partone/two", component: Two }
];

const defend = {
  "/partone/two": (from, to) => {
    if (5 > 3) {
      // console.log(`from: ${from}, to: ${to}`);
      return <Two />;
    }
    return null;
  }
};

function PartOne() {
  return renderPageRoute(paths, defend);
}

export default withRouter(PartOne);
