import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reduxPromise from "redux-promise";

import reduxLibrary from "./redux";

type RootProps = {
  children: React.ReactNode;
  initialState?: Object;
};

const Root = ({ children, initialState = {} }: RootProps) => {
  const middleware = [thunk, reduxPromise];

  const store = createStore(
    reduxLibrary,
    initialState,
    applyMiddleware(...middleware)
  );

  return <Provider store={store}>{children}</Provider>;
};

export default Root;
