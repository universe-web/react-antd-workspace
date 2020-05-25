import { combineReducers } from "redux";
import part from "./part";
import own from "./own";

const appInitialState = {
  status: 0,
};

function appReducer(state = appInitialState, action) {
  return state;
}

export default function (state, action) {
  return combineReducers({ app: appReducer, part, own })(state, action);
}
