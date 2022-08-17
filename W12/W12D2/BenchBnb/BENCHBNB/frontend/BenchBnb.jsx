import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root'
import configureStore from "./store/store";
import {fetchBenches, fetchBench} from './util/bench_api_util'
import { fetchAllBenches, createBench } from "./actions/bench_actions"
import {login, logout} from './actions/session_actions'
import { asArray } from './reducers/selectors'

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser){
        const preloadedState = {
            session: { id: window.currentUser.id},
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchBench = fetchBench;
    window.fetchBenches = fetchBenches;
    window.fetchAllBenches = fetchAllBenches;
    window.login = login;
    window.logout = logout;
    window.asArray = asArray;
    window.store = store;
    window.createBench = createBench;


    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});
