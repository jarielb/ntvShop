import { call, fork, all } from 'redux-saga/effects'
import {
  userLogin,
  getProducts
} from './app/saga'

export default function * rootSaga () {
  yield [
    fork(userLogin),
    fork(getProducts)
  ]
}