import { userService } from './user.service';
import config from 'config';
import { authHeader } from '../_helpers';

export const dashboardService = {
    getAlerts
};

function getAlerts() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/alerts`, requestOptions).then(handleResponse);
};

function logout() {
    userService.logout();
};

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
};