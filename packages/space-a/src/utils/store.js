import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "@root/reducers";

const logger = createLogger();

export default function configureStore(middlewares) {
  let store = createStore(rootReducer, applyMiddleware(logger, ...middlewares));

  return store;
}
