import { call, put, takeLatest } from 'redux-saga/effects';
import axiosConfig from '../../configs/AxiosConfig';

function fetchProductsApi() {
  return axiosConfig.get('/products');
}

function* fetchProducts() {
  try {
    const response: {data: any} = yield call(fetchProductsApi);
    console.log('API response:', response)
    console.log('Products data:', response?.data);
    yield put({ type: 'FETCH_INVENTORY_SUCCESS', payload: response?.data, error: null });
  } catch (err :unknown) {
    const error = err as Error;
    yield put({ type: 'FETCH_INVENTORY_FAILURE', error: error?.message });
  }
}

export function* watchProductSaga() {
  yield takeLatest('FETCH_PRODUCTS_REQUEST', fetchProducts);
}
