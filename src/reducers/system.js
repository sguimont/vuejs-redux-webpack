'use strict';

export default function buckets(state = {
  displayAlert: false,
  alertMessage: ''
}, action) {
  console.log(action);

  switch (action.type) {

    case 'DISPLAY_ALERT':
      return Object.assign({}, state, {
        displayAlert: true,
        alertMessage: action.err.message || 'An error occurs!'
      });

    case 'HIDE_ALERT':
      return Object.assign({}, state, {
        displayAlert: false,
        alertMessage: ''
      });

    default:
      return state;
  }
}
