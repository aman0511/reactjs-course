import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import accounts from 'reducers/accounts';
import misc from 'reducers/misc';

export default combineReducers({
  accounts,
  misc,
  routing: routerReducer,
  form: formReducer,
});
