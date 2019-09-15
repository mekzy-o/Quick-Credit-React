import React from "react";
import ReactDOM from "react-dom";
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducers from './redux/reducers/index';
import App from "./App";

const middleware = [thunk];
const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(...middleware)),
)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
