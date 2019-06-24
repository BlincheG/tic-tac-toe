import {
  ADD,
  INCREMENT,
  DECREMENT,
  SUBTRACT,
  HANDLE_CLICK,
  NEW_GAME
} from "./actions";

const initialState = {
  counter: 0,
  fieldRows: Array(9).fill(null),
  currentPlayer: true
};

export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const reducer = ( state = initialState, action ) => {
  switch(action.type) {
    case HANDLE_CLICK:
      let squares = [...state.fieldRows];

      if (calculateWinner(squares) || squares[action.value]) {
        return;
      };

      squares[action.value] = state.currentPlayer ? 'X' : 'O';

      return {
        ...state,
        fieldRows: squares,
        currentPlayer: !state.currentPlayer
      };

    case NEW_GAME:
      return {
        initialState
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
