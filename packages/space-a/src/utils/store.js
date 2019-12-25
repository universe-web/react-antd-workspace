import { createStore } from "redux";

import rootReducer from "@root/reducers";

export default function configureStore(preloadedState) {
  let store = createStore(rootReducer, preloadedState);

  return store;
}
