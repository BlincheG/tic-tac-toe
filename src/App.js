import React from 'react';
import './styles/index.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Board from './components/Board/Board'
import About from './components/About'
import Header from './components/Header'
import Counter from './components/Counter/Counter'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="game-board">
          <Route path="/" exact component={Board} />
          <Route path="/about" component={About} />
          <Route path="/counter" component={Counter} />
        </div>
      </div>
    </Router>
  );
}

export default App;
