import * as APIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

//sync
export const receiveBenches = benches => ({
    type: RECEIVE_BENCHES,
    benches: benches
});

export const receiveBench =({bench, reviews, authors}) => ({
    type: RECEIVE_BENCH,
    bench,
    reviews,
    authors,
});

export const receiveReview =({ review, average_rating, author}) => ({
    type: RECEIVE_REVIEW,
    review,
    average_rating,
    author,
});

//async

export const createReview = review => dispatch => (
    APIUtil.createReview(review).then(review => (
        dispatch(receiveReview(review))
    ))
);

export const fetchAllBenches = (filters) => dispatch => (
    APIUtil.fetchBenches(filters)
    .then((benches) => (
        dispatch(receiveBenches(benches))
    ))
    );

export const createBench = (bench) => dispatch => (
    APIUtil.createBench(bench).then(bench => (
        dispatch(receiveBench(bench))
    ))
);

export const fetchBench = id => dispatch => (
    APIUtil.fetchBench(id).then(payload => (
        dispatch(receiveBench(payload))
    ))
);