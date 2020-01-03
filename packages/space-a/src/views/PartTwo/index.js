import { withRouter } from "react-router-dom";
import One from "./One";
import Two from "./Two";
import { renderPageRoute } from "@root/utils/routerUtil";

const paths = [
  { path: "/parttwo/one", component: One },
  { path: "/parttwo/two", component: Two }
];

function PartTwo() {
  return renderPageRoute(paths);
}

/* <Switch>
  <Route exact path="/parttwo/one" component={One} />
  <Route exact path="/parttwo/two" component={Two} />
</Switch> */

export default withRouter(PartTwo);
