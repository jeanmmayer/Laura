import { dashboardService } from '../_services';
import { dashboardConstants } from '../_constants/dashboard.constants';

export const dashboardActions = {
    getAlerts
};

function getAlerts() {
    function success(alerts) { return { type: dashboardConstants.GET_ALERTS_SUCCESS, alerts } };
    function failure(error) { return { type: dashboardConstants.GET_ALERTS_FAILURE, error } };

    return dispatch => {
        dashboardService.getAlerts()
            .then(
                alerts => dispatch(success(alerts)),
                error => dispatch(failure(error.toString()))
            );
    };
};

