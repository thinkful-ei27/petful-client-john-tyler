import axios from 'axios';
import {API_BASE_URL} from '../config';

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST'
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
})

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS'
export const fetchDogSuccess = (data) => ({
  type: FETCH_DOG_SUCCESS,
  data
})

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR'
export const fetchDogError = (error) => ({
  type: FETCH_DOG_ERROR,
  error
})

export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST'
export const adoptDogRequest = () => ({
  type: ADOPT_DOG_REQUEST
})

export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS'
export const adoptDogSuccess = () => ({
  type: ADOPT_DOG_SUCCESS,
})

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR'
export const adoptDogError = (error) => ({
  type: ADOPT_DOG_SUCCESS,
  error
})

export const fetchDog = () => dispatch => {
  dispatch(fetchDogRequest());
  const config = {
    method: 'get',
    url: `${API_BASE_URL}/api/dog`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return axios(config)
    .then(res => {
      const dog = res.data;
      console.log(dog);
      return dispatch(fetchDogSuccess(dog));
    })
    .catch(err => {
      const { message } = err.response.data;
      return dispatch(fetchDogError(message));
    })
}

export const adoptDog = () => dispatch => {
  dispatch(adoptDogRequest());
  const config = {
    method: 'delete',
    url: `${API_BASE_URL}/api/dog`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return axios(config)
    .then(res => {
      return dispatch(adoptDogSuccess());
    })
    .then(() => {
      return dispatch(fetchDog());
    })
    .catch(err => {
      const { message } = err.response.data;
      return dispatch(adoptDogError(message));
    })
}