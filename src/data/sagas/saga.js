import { takeEvery } from "redux-saga/effects";
import { fetchVendorsSaga } from "./vendorsSaga/vendorsSaga";
import { sagaActions } from "./sagaActions";

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_VENDORS_SAGA, fetchVendorsSaga);
}
