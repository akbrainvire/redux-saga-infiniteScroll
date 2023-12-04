import { all } from "redux-saga/effects";
import { pokemonListWatcherSaga } from "./reducers/scrollSaga";

export default function* rootSaga() {
  yield all([pokemonListWatcherSaga()]);
}
