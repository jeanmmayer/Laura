import { userService } from './user.service';
import config from 'config';
import { authHeader } from '../_helpers';

export const alertService = {
    getAlerts,
    storeEvolution
};

function getAlerts(params) {
    const headers = authHeader();
    headers['Content-Type'] = 'application/json';

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(params)
    };

    return fetch(`${config.apiUrl}/api/alerts/list`, requestOptions).then(handleResponse);
};


function storeEvolution(alert_id, text) {
    const headers = authHeader();
    headers['Content-Type'] = 'application/json';

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ alert_id, text })
    };

    return fetch(`${config.apiUrl}/api/alert/history`, requestOptions).then(handleResponse);
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