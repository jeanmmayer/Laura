import { dashboardService } from '../_services';
import { dashboardConstants } from '../_constants/dashboard.constants';

export const dashboardActions = {
    getAlerts
};

function getAlerts() {
    function request() { return { type: dashboardConstants.GET_ALERTS_REQUEST } };
    function success(alerts) { return { type: dashboardConstants.GET_ALERTS_SUCCESS, alerts } };
    function failure(error) { return { type: dashboardConstants.GET_ALERTS_FAILURE, error } };

    return dispatch => {
        dispatch(request());

        dashboardService.getAlerts()
            .then(
                alert => dispatch(success(alert)),
                error => dispatch(failure(error.toString()))
            );
    };
};

