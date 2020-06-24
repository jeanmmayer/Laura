import { alertService } from '../_services';
import { alertConstants } from '../_constants/alert.constants';

export const alertActions = {
    getAlerts,
    storeEvolution
};

function getAlerts() {
    function success(alerts) { return { type: alertConstants.GET_ALERTS_SUCCESS, alerts } };
    function failure(error) { return { type: alertConstants.GET_ALERTS_FAILURE, error } };

    return dispatch => {
        alertService.getAlerts()
            .then(
                alerts => dispatch(success(alerts)),
                error => dispatch(failure(error.toString()))
            );
    };
};

function storeEvolution(alert_id, modalText) {
    function request() { return { type: alertConstants.STORE_ALERT_HISTORY_REQUEST } };
    function success() { return { type: alertConstants.STORE_ALERT_HISTORY_SUCCESS } };
    function failure(error) { return { type: alertConstants.STORE_ALERT_HISTORY_FAILURE, error } };

    return dispatch => {
        dispatch(request());

        alertService.storeEvolution(alert_id, modalText)
            .then(
                alerts => dispatch(success()),
                error => dispatch(failure(error.toString()))
            );
    };
};

