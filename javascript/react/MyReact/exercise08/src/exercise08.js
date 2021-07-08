import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from 'react-redux';

import rootReducer from "./reducers";
// import App from "./components/App";
import AsyncApp from "./containers/AsyncApp";

// 適切なimportを追加し、AppでStoreが使われるようにしてください

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);
ReactDOM.render(
    <Provider store={store}>
        {/* <App /> */}
        <AsyncApp />
    </Provider>,
    document.getElementById("root")
);
