import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducer";
import createSagaMiddleware from "redux-saga"; // +
import rootSaga from "./rootSaga" // +

const sagaMiddleware = createSagaMiddleware() // +

const middlewares = [sagaMiddleware] // +

const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
})

sagaMiddleware.run(rootSaga) // +

export default store

