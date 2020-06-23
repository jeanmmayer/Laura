import { dashboardConstants } from '../_constants';

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

export function dashboard(state = initialState, action) {
	switch (action.type) {
		case dashboardConstants.GET_ALERTS_REQUEST:
			return {
				loadingAlerts: true
			};
		case dashboardConstants.GET_ALERTS_SUCCESS:
			return {
				loadingAlerts: false,
				alerts: action.alerts
			};
		case dashboardConstants.GET_ALERTS_FAILURE:
			return {};
		default:
			return state
	}
}