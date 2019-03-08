import axios from 'axios';
import {API_BASE_URL} from '../config';

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST'
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
})

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS'
export const fetchCatSuccess = (data) => ({
  type: FETCH_CAT_SUCCESS,
  data
})

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR'
export const fetchCatError = (error) => ({
  type: FETCH_CAT_SUCCESS,
  error
})

export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST'
export const adoptCatRequest = () => ({
  type: ADOPT_CAT_REQUEST
})

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS'
export const adoptCatSuccess = () => ({
  type: ADOPT_CAT_SUCCESS,
})

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR'
export const adoptCatError = (error) => ({
  type: ADOPT_CAT_SUCCESS,
  error
})

export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest());
  const config = {
    method: 'get',
    url: `${API_BASE_URL}/api/cat`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return axios(config)
    .then(res => {
      const cat = res.data;
      console.log(cat);
      return dispatch(fetchCatSuccess(cat));
    })
    .catch(err => {
      const { message } = err.response.data;
      return dispatch(fetchCatError(message));
    })
}

export const adoptCat = () => dispatch => {
  dispatch(adoptCatRequest());
  const config = {
    method: 'delete',
    url: `${API_BASE_URL}/api/cat`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return axios(config)
    .then(res => {
      return dispatch(adoptCatSuccess());
    })
    .then(() => {
      return dispatch(fetchCat());
    })
    .catch(err => {
      const { message } = err.response.data;
      return dispatch(adoptCatError(message));
    })
}