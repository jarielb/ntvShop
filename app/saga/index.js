import {
  put,
  take,
  call,
  takeLatest
} from 'redux-saga/effects'

import Auth from '../services/auth';
import Product from '../services/product';


import {
  LOGIN,
  LOGIN_END,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../constants'

import {
  loginSuccess,
  loginError
} from '../actions'

import { Alert } from 'react-native'

export function * userLogin () {
  while (true) {
    try {
      const params = yield take(LOGIN)
      const { email, password } = params;
      const auth = new Auth()
      const response = yield call(auth.login, {email, password})
      if (response.status >= 400) {
        throw response
      }
      yield put({ type: LOGIN_SUCCESS, response})
    } catch (error) {
      yield put({ type: LOGIN_ERROR, error})
    }
  }
}

export function * getProducts () {
  while (true) {
    try {
      yield take(GET_PRODUCTS)
      const product = new Product()
      const response = yield call(product.getAll)
      if (response.status >= 400) {
        throw response
      }
      yield put({ type: GET_PRODUCTS_SUCCESS, response})
    } catch (error) {
      yield put({ type: GET_PRODUCTS_ERROR, error})
    }
  }
}

export default function * () {
  yield [
    takeEvery(LOGIN, userLogin),
    takeEvery(GET_PRODUCTS, getProducts)
  ]
}