'use strict';

export default function buckets(state = {
  isPosting: false,
  isFetching: false,
  showAddBucketModal: false,
  items: []
}, action) {
  console.log(action);

  switch (action.type) {

    case 'SHOW_ADD_BUCKET_DIALOG':
      return Object.assign({}, state, {
        showAddBucketModal: true
      });

    case 'HIDE_ADD_BUCKET_DIALOG':
      return Object.assign({}, state, {
        showAddBucketModal: false
      });

    case 'ADDED_BUCKET':
      return Object.assign({}, state, {
        isPosting: false,
        items: state.items.concat([{code: action.bucket.code, name: action.bucket.name}])
      });

    case 'ADDING_BUCKET':
      return Object.assign({}, state, {
        isPosting: true
      });

    case 'FETCHING_BUCKETS':
      return Object.assign({}, state, {
        isFetching: true
      });

    case 'FETCHED_BUCKETS':
      return Object.assign({}, state, {
        isFetching: false,
        items: action.buckets
      });

    default:
      return state;
  }
}
