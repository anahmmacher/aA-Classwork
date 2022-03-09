
import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer'

const configureStore = (preoloadedState = {}) => {
    return createStore(rootReducer, preoloadedState)
}

export default configureStore;