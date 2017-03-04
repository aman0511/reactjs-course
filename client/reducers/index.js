import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import accounts from 'reducers/accounts';
import misc from 'reducers/misc';

const appReducer = combineReducers({
  accounts,
  misc,
  form: formReducer,
});

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === 'RESET_STATE') {
    newState = undefined;
  }
  return appReducer(newState, action);
};

export default rootReducer;
