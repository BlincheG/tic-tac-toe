const initialState = {
  counter: 0,
  fieldRows: Array(9).fill(null)
};

const reducer = ( state = initialState, action ) => {
  if(action.type === 'INCREMENT') {
    return {
      ...state,
      counter: state.counter + 1
    };
  }

  if(action.type === 'ADD') {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }

  return state;
};

export default reducer;
