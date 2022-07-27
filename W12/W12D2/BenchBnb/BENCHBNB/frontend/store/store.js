import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

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


const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, logger)
        ));

export default configureStore;