import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root'
import configureStore from "./store/store";
import {fetchBenches, fetchBench} from './util/bench_api_util'
import { fetchAllBenches } from "./actions/bench_actions"

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser){
        const preloadedState = {
            session: { id: window.currentUser.id},
            entities: {
                users: { [window.currentUser.id]: window.currentUser},
                benches: {},
                reviews: {}
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        const pstate = {
                entities: {
                    users: {},
                    reviews: {},
                    benches: {}
                },
                session: {
                    id: null,
                },
                errors: {
                    session: []
                }
            }

        store = configureStore(pstate);
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchBench = fetchBench;
    window.fetchBenches = fetchBenches;
    window.fetchAllBenches = fetchAllBenches;


    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});
