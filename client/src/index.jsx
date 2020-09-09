import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import App from './Components/App.jsx';
import store from "./store/store";

ReactDOM(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)