const redux = require('redux');

const initialState = {
  counter: 0,
};

const rootReducer = (state = initialState, action) => {
  console.log('In root reducer');

  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    }
  }

  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }

  return state;
};

const store = redux.createStore(rootReducer);

store.subscribe(() => {
  console.log('[Subscribtion]: ', store.getState());
});

console.log('before', store.getState());

store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
store.dispatch({ type: 'WRONG_ACTION' });

console.log('after', store.getState());