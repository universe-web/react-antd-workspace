import { all, fork } from "redux-saga/effects";
import ownSaga from "./own";

export default function* rootSaga() {
  yield all([fork(ownSaga)]);
}
