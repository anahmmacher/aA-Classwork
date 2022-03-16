export const signUp = user => (
    $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user }
    })
);

export const LogIn = user => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user }
    })
);

export const LogOut = () => (
    $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
)