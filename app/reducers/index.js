import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import accounts from 'reducers/accounts';

export default combineReducers({
  accounts,
  routing: routerReducer,
  form: formReducer,
});
