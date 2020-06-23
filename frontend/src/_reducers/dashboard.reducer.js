import { dashboardConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function dashboard(state = initialState, action) {
	switch (action.type) {
		case dashboardConstants.GET_ALERTS_REQUEST:
			return {
				loadingAlerts: true
			};
		case dashboardConstants.GET_ALERTS_SUCCESS:
			return {
				loadingAlerts: false,
				list: action.list
			};
		case dashboardConstants.GET_ALERTS_FAILURE:
			return {};
		default:
			return state
	}
}