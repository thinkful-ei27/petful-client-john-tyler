import {
  FETCH_CAT_REQUEST,
  FETCH_CAT_SUCCESS,
  FETCH_CAT_ERROR,
  ADOPT_CAT_REQUEST,
  ADOPT_CAT_SUCCESS,
  ADOPT_CAT_ERROR
} from '../actions/cat';

const initialState = {
  data: null,
  error: null,
  loading: false
}

export default function reducer(state=initialState, action) {
  if (action.type === FETCH_CAT_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  }
  if (action.type === FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      data: action.data,
      loading: false
    })
  }
  if (action.type === FETCH_CAT_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error1
    })
  }
  if (action.type === ADOPT_CAT_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  }
  if (action.type === ADOPT_CAT_SUCCESS) {
    return Object.assign({}, state, {
      loading: false
    })
  }
  if (action.type === ADOPT_CAT_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  return state;
}