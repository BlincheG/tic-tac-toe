import {
  ADD,
  INCREMENT,
  DECREMENT,
  SUBTRACT,
  HANDLE_CLICK,
  NEW_GAME
} from "./actions";

import {calculateWinner} from '../common/common'

const initialState = {
  counter: 0,
  fieldRows: Array(9).fill(null),
  currentPlayer: true
};

const reducer = ( state = initialState, action ) => {
  switch(action.type) {
    case HANDLE_CLICK:
      let squares = [...state.fieldRows];

      if (calculateWinner(squares) || squares[action.value]) {
        return state;
      };

      squares[action.value] = state.currentPlayer ? 'X' : 'O';

      return {
        ...state,
        fieldRows: squares,
        currentPlayer: !state.currentPlayer
      };

    case NEW_GAME:
      const cleanBoard = Array(9).fill(null);
      const currentPlayer = state.currentPlayer === false ? 'X' : 'O';

      return {
        ...state,
        fieldRows: cleanBoard,
        currentPlayer: currentPlayer
      };

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

};

export default reducer;
