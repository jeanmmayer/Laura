import { alertConstants } from '../_constants';

const initialState = {
	loadingAlerts: false,
	alerts: [
		{
			'id': 1,
			'med_record': '000',
			'patient_name': 'Nome inicial',
			'alert_level': 'gray',
			'created_at': '22/06/20 - 17:10',
			'is_pendent': true,
			'patient': {
				'name': 'John Doe'
			},
			'symptoms': [
				{'name': 'Tosse', 'level': 1}
			]
		}
	]
};

export function alert(state = initialState, action) {
	switch (action.type) {
		case alertConstants.GET_ALERTS_REQUEST:
			return {
				...state,
				loadingAlerts: true
			};
		case alertConstants.GET_ALERTS_SUCCESS:
			return {
				...state,
				loadingAlerts: false,
				alerts: action.alerts
			};
		case alertConstants.GET_ALERTS_FAILURE:
			return {};
		case alertConstants.STORE_ALERT_HISTORY_REQUEST:
			return {
				...state,
				savingHistory: true
			};
		case alertConstants.STORE_ALERT_HISTORY_SUCCESS:
			return {
				...state,
				savingHistory: false
			};
		case alertConstants.STORE_ALERT_HISTORY_FAILURE:
			return {
				...state,
				savingHistory: false
			};
		default:
			return state
	}
}