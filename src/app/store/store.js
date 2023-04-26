import { configureStore } from "@reduxjs/toolkit";
import vendorReducer from "../features/vendors/vendorsSlice";
import createSagaMiddleware from "redux-saga";
import saga from "../sagas/saga";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export default configureStore({
  reducer: {
    vendor: vendorReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(saga);
