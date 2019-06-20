import React, {Component} from 'react';
import Square from '../Square';
import {connect} from 'react-redux';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // fieldRows: Array(9).fill(null),
      currentPlayer: true,
    };
  }

  clickHandler = (i) => {
    const squares = [...this.state.fieldRows];
    if (calculateWinner(squares) || squares[i]) {
      return;
    };

    squares[i] = this.state.currentPlayer ? 'X' : 'O';

    this.setState({
      fieldRows: squares,
      currentPlayer: !this.state.currentPlayer,
    });
  };

  newGame = () => {
    const cleanBoard = Array(9).fill(null);
    const currentPlayer = this.state.currentPlayer === false ? 'X' : 'O';

    this.setState({
      fieldRows: cleanBoard,
      currentPlayer: currentPlayer
    })
  }

  render() {
    let status;
    const winner = calculateWinner(this.props.fieldRows);
    if(winner) {
      status = 'Победитель: ' + winner;
    } else {
      status = 'Следующий игрок: ' + (this.state.currentPlayer ? 'X' : 'O');
  }

    return (
      <div className="Board">
        <div className="status">
          {status}
        </div>

        <button onClick={() => {this.newGame()} }>Начать заново</button>

        <div className="Board-row">
          <Square value={this.props.fieldRows[0]} onClick={() => this.clickHandler(0)} />
          <Square value={this.props.fieldRows[1]} onClick={() => this.clickHandler(1)}  />
          <Square value={this.props.fieldRows[2]} onClick={() => this.clickHandler(2)}  />
        </div>
        <div className="Board-row">
          <Square value={this.props.fieldRows[3]} onClick={() => this.clickHandler(3)}  />
          <Square value={this.props.fieldRows[4]} onClick={() => this.clickHandler(4)}  />
          <Square value={this.props.fieldRows[5]} onClick={() => this.clickHandler(5)}  />
        </div>
        <div className="Board-row">
          <Square value={this.props.fieldRows[6]} onClick={() => this.clickHandler(6)}  />
          <Square value={this.props.fieldRows[7]} onClick={() => this.clickHandler(7)}  />
          <Square value={this.props.fieldRows[8]} onClick={() => this.clickHandler(8)}  />
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
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

const mapStateToProps = state => {
  return {
    fieldRows: state.fieldRows
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fieldRows: () => dispatch({type: 'HANDLE_CLICK'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
