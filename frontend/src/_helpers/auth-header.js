export function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'token': user.token };
    } else {
        return {};
    }
}