import {ADD, INCREMENT, DECREMENT, SUBTRACT} from "./actions";

const initialState = {
  counter: 0,
  fieldRows: Array(9).fill(null),

};

const reducer = ( state = initialState, action ) => {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case ADD:
      return {
        ...state,
        counter: state.counter + action.amount
      };
    case SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.amount
      };
    default:
      return state;
  }

  // if(action.type === 'HANDLE_CLICK') {
  //   return {
  //     ...state,
  //     fieldRows: action.amount
  //   };
  // }

};

export default reducer;
