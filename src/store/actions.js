export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const HANDLE_CLICK = 'HANDLE_CLICK';
export const NEW_GAME = 'NEW_GAME';
export const CALCULATE_WINNER = 'CALCULATE_WINNER';

export const incrementCounter = () => {
  return {type: INCREMENT};
};

export const decrementCounter = () => {
  return {type: DECREMENT};
};

export const handleClick = (value) => {
  return {type: HANDLE_CLICK, value: value};
};

export const newGame = () => {
  return {type: NEW_GAME};
};

// export const calculateWinner = (squares) => {
//   return {type: CALCULATE_WINNER, squares: squares};
// };

export const addCounter = amount => ({type: ADD, amount});

export const subtractCounter = amount => {
  return {type: SUBTRACT, amount};
};

