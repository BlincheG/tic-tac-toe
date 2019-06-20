export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const FETCH_COUNTER_REQUEST = 'FETCH_COUNTER_REQUEST';
export const FETCH_COUNTER_SUCCESS = 'FETCH_COUNTER_SUCCESS';
export const FETCH_COUNTER_ERROR = 'FETCH_COUNTER_ERROR';

export const incrementCounter = () => {
  return {type: INCREMENT};
};

export const decrementCounter = () => {
  return {type: DECREMENT};
};

export const addCounter = amount => {
  return {type: ADD, amount};
};

export const subtractCounter = amount => {
  return {type: SUBTRACT, amount};
};

export const fetchCounterRequest = amount => {
  return {type: FETCH_COUNTER_REQUEST, amount};
};

export const fetchCounterSuccess = amount => {
  return {type: FETCH_COUNTER_SUCCESS, amount};
};

export const fetchCounterError = amount => {
  return {type: FETCH_COUNTER_ERROR, amount};
};