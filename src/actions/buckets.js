import api from "../services/api";
import store from "../store";

const ADD_BUCKET = 'ADD_BUCKET';
const ADDED_BUCKET = 'ADDED_BUCKET';
const ADDING_BUCKET = 'ADDING_BUCKET';

const FETCHING_BUCKETS = 'FETCHING_BUCKETS';
const FETCHED_BUCKETS = 'FETCHED_BUCKETS';

export function addedBucket(bucket) {
  return {
    type: ADDED_BUCKET,
    bucket
  };
}

export function addingBucket() {
  return {
    type: ADDING_BUCKET
  };
}

export function addBucket(bucket) {
  return (dispatch, getState) => {
    dispatch(addingBucket());
    api.add('buckets', bucket).then(function () {
      dispatch(addedBucket(bucket));
    }, function (err) {
      dispatch(displayAlert(err));
    });
  };
}

export function fetchingBuckets() {
  return {
    type: FETCHING_BUCKETS
  };
}

export function fetchedBuckets(buckets) {
  return {
    type: FETCHED_BUCKETS,
    buckets
  };
}

export function fetchBuckets() {
  return (dispatch, getState) => {
    dispatch(fetchingBuckets());
    api.get('buckets').then(function (buckets) {
      dispatch(fetchedBuckets(buckets));
    }, function (err) {
      dispatch(displayAlert(err));
    });
  };
}

export function displayAlert(err) {
  return {
    type: 'DISPLAY_ALERT',
    err
  };
}

api.get('buckets').done(function (buckets) {
  store.dispatch(fetchedBuckets(buckets));
});

