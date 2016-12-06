import * as MiscActions from 'actions/misc/misc.actions';

export default function fetchComponentData(dispatch, components, params) {
  const needs = components.reduce((prev, current) =>
    Object.keys(current).reduce((acc, key) =>
      ({}.hasOwnProperty.call(current[key], 'needs') ? current[key].needs.concat(acc) : acc),
      prev), []);
  const promises = needs.map(need => dispatch(need(params)));
  return Promise.all(promises);
}

// for client side use, let each component trigger it's fetching data logics
// might as well to add in dupe check to avoid fetching when data is already there
export function fetchNeeds(needs, props) {
  const { params, dispatch } = props;
  const promises = needs.map(need => dispatch(need(params)));
  return Promise.all(promises)
    .then(
      () => dispatch(MiscActions.endLoading()),
      () => dispatch(MiscActions.endLoading()),
    );
}
