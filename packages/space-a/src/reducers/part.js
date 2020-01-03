import { combineReducers } from "redux";

const partoneInitialState = {
  name: "one"
};

function partoneReducer(state = partoneInitialState, action) {
  switch (action.type) {
    case "CHANGE_PART_ONE": {
      return {
        ...state,
        ...action.input
      };
    }
    default:
      return state;
  }
}

export default combineReducers({
  partone: partoneReducer
});
