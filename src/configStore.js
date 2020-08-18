import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const composeEnhancers = composeWithDevTools({});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configStore(
  initialState = {
    user: null,
  }
) {
  const middleware = composeEnhancers(applyMiddleware(thunk));
  let store = createStore(persistedReducer, initialState, middleware);
  let persistor = persistStore(store);
  const storeInfo = {};
  storeInfo.store = store;
  storeInfo.persistor = persistor;
  return storeInfo;
}
