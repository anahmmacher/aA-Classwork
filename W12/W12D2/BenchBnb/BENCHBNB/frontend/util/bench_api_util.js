export const fetchBenches = () => (
    $.ajax({
        method: 'GET',
        url: 'api/benches'
    })
);

export const fetchBench = id => (
    $.ajax({
        method: 'GET',
        url: `api/benches/${id}`
    })
);