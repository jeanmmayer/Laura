import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { dashboard } from './dashboard.reducer';

const rootReducer = combineReducers({
  authentication,
  dashboard
});

export default rootReducer;