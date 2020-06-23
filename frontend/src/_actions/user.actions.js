import { userConstants } from '../_constants';
import { userService } from '../_services';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout
};

function login(email, password) {
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } };
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } };
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } };

    return dispatch => {
        dispatch(request({ email }));

        userService.login(email, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/dashboard');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };
};

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
};
