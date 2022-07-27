
import { RECEIVE_BENCHES } from "../actions/bench_actions";



const benchesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BENCHES:
      const benches = {};
      action.benches.forEach(bench => {
        benches[bench.id] = bench;
      });
      return benches;
    default:
      return state;
  }
};

export default benchesReducer;