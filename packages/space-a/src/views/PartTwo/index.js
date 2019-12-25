import React from "react";
import { Switch, Route } from "react-router-dom";
import One from "./One";
import Two from "./Two";

function PartOne() {
  return (
    <Switch>
      <Route exact path="/parttwo/one" component={One} />
      <Route exact path="/parttwo/two" component={Two} />
    </Switch>
  );
}

export default PartOne;
