import { combineReducers } from "redux";

const appInitialState = {
  status: 0
};

function appReducer(state = appInitialState, action) {
  return state;
}

export default function(state, action) {
  return combineReducers({ app: appReducer })(state, action);
}
