import { call, put } from "redux-saga/effects";
import Axios from "axios";
import { add } from "../../slices/vendorsSlice";

const baseApiEndpoint = process.env.REACT_APP_REST_ENDPOINT;

let axiosCall = async ({ url, method, params }) => {
  return await Axios({
    url,
    method,
    params,
  });
};

export function* fetchVendorsSaga(action) {
  try {
    let result = yield call(axiosCall, {
      url: baseApiEndpoint + "/restaurant/vendors-list",
      method: "GET",
      params: action?.payload?.params,
    });
    yield put(add(result?.data?.data?.finalResult.filter((item) => item.type === "VENDOR")));
  } catch (e) {
    yield put({ type: "VENDORS_SAGA_FAILED" });
  }
}
