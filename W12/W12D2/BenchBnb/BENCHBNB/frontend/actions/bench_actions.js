import * as APIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

//sync
export const receiveBenches = benches => ({
    type: RECEIVE_BENCHES,
    benches: benches
});

//async
export const fetchAllBenches = () => dispatch => (
    APIUtil.fetchBenches()
    .then((benches) => (
        dispatch(receiveBenches(benches))
    ))
    );