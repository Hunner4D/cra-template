import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reduxPromise from "redux-promise";


import reduxLibrary from "./redux";

const Root = ({ children, initialState = {} }) => {
  const middleware = [thunk, reduxPromise];

  const store = createStore(
    reduxLibrary,
    initialState,
    applyMiddleware(...middleware)
  );

  return <Provider store={store}>{children}</Provider>;
};

export default Root;