import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Login from "./routes/Login";
import UserDetails from "./routes/UserDetails";
import configStore from "./configStore";
import { Provider } from "react-redux";

import "./App.css";

function App() {
  const storeInfo = configStore();

  return (
    <Provider store={storeInfo.store}>
      <PersistGate loading={null} persistor={storeInfo.persistor}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/user-details" component={UserDetails} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
