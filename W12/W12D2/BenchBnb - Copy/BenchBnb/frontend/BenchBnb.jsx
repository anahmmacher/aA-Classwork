import React from "react";
import ReactDOM from "react-dom";
import root from './components/root'
import configureStore from "./store/store";
import {signUp, logIn, logOut} from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);

    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
});

window.logIn = logIn;
window.signUp = signUp;
window.logOut = logOut;

