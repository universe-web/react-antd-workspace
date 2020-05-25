import { combineReducers } from "redux";

function ownReducer(state = null, action) {
  switch (action.type) {
    case "LOGIN": {
      return {
        name: "mai",
      };
    }
    default:
      return state;
  }
}

export default combineReducers({
  own: ownReducer,
});
