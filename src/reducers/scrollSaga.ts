import { delay, put, call, takeEvery, takeLatest } from "redux-saga/effects";
import {
  fetchPokemonList,
  loadMorePokemon,
  loadMorePokemonFailed,
  loadMorePokemonSuccess,
  setNextUrl,
  setPokemonListFailed,
  setPokemonListSuccess,
} from "./scrollSlice";

export function* loadMorePokemonListSaga(action: any): object {
  //   console.log(action);
  try {
    const response = yield call(fetch, action.payload);
    const data = yield response.json().then((data: any) => data);
    yield delay(2000);
    yield put(setNextUrl(data.next));
    yield put(loadMorePokemonSuccess(data));
  } catch (error) {
    yield put(loadMorePokemonFailed(error));
  }
}

export function* fetchPokemonListSaga(): object {
  try {
    const response = yield call(fetch, "https://pokeapi.co/api/v2/pokemon/");
    const data = yield response.json().then((data: any) => data);
    yield delay(2000);
    yield put(setNextUrl(data.next));
    yield put(setPokemonListSuccess(data));
  } catch (error) {
    yield put(setPokemonListFailed(error));
  }
}

export function* pokemonListWatcherSaga() {
  yield takeLatest(fetchPokemonList, fetchPokemonListSaga);
  yield takeEvery(loadMorePokemon, loadMorePokemonListSaga);
}
