import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import accounts from 'reducers/accounts';
import misc from 'reducers/misc';

export default combineReducers({
  accounts,
  misc,
  form: formReducer,
});
