import configureStore from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/IcecreamSlice";
import reduxLogger from "redux-logger";

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: { cake: cakeReducer, icecream: icecreamReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
