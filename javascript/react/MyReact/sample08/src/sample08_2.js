import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
  
import rootReducer from "./08_2/reducers";
import AsyncApp from "./08_2/containers/AsyncApp";
  
const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);
ReactDOM.render(
    <Provider store={store}>
        <AsyncApp />
    </Provider>,
    document.getElementById("root")
);