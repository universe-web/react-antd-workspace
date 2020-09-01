import React from "react";
import { Switch, Route } from "react-router";
import { withRouter } from "react-router-dom";
import Canvas from "./Canvas";
import UI from "./Ui";

function PartTwo(props) {
  const { location } = props;

  return (
    <Switch location={location}>
      <Route exact path="/" component={Canvas} />
      <Route path="/parttwo/canvas" component={Canvas} />
      <Route path="/parttwo/ui" component={UI} />
    </Switch>
  );
}

/* <Switch>
  <Route exact path="/parttwo/one" component={One} />
  <Route exact path="/parttwo/two" component={Two} />
</Switch> */

export default withRouter(PartTwo);
