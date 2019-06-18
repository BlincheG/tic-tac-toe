import React from 'react';
import './styles/index.scss'
import Board from './components/Board/Board'

function App() {
  return (
    <div className="App">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

export default App;
