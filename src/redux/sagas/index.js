import { all } from 'redux-saga/effects';
import getItemSaga from './getItemSaga';

export default function* rootSaga() {
  yield all([
    getItemSaga(),
  ]);
}
