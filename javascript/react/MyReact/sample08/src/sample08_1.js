import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from 'react-redux';

import rootReducer from "./08_1/reducers";
import App from "./08_1/components/App";
  
const store = createStore(rootReducer);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);