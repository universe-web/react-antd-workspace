import React from "react";
import { Switch, Route } from "react-router";
import { withRouter } from "react-router-dom";
import One from "./One";
import Two from "./Two";

function PartTwo(props) {
  const { location } = props;

  return (
    <Switch location={location}>
      <Route exact path="/" component={One} />
      <Route path="/parttwo/one" component={One} />
      <Route path="/parttwo/two" component={Two} />
    </Switch>
  );
}

/* <Switch>
  <Route exact path="/parttwo/one" component={One} />
  <Route exact path="/parttwo/two" component={Two} />
</Switch> */

export default withRouter(PartTwo);
