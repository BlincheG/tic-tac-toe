import React, {Component} from 'react';
import Square from '../Square'

// const FIELD_ROWS = [
//     [], [], [],
//     [], [], [],
//     [], [], []
// ];

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 'X',
      winningPlayer: false,
      fieldRows: Array(9).fill(null)
    }
  };

  clickHandler = (i) => {
    const squares = this.state.fieldRows.slice();
    if (this.calculateWinner(squares) && squares[i]) {
      return;
    }
    const currentPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
    this.setState({
      currentPlayer,
      fieldRows: squares
    });
    console.log(squares);
  };

  calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i += 1) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], winnerRow: lines[i] };
      }
    }

    return { winner: null, winnerRow: null };
  };

  render() {
    let status;
    const defaultProps = {onClick: this.clickHandler, currentPlayer: this.state.currentPlayer};
    const winner = this.calculateWinner(this.state.fieldRows);

    if(winner) {
      status = 'Winner ' + winner;
    } else {
      status = 'Next Player ' + (this.state.currentPlayer);
    }

    return (
      <div className="Board">
        <div className="status">
          Next Player: {status}
        </div>

        {/*{FIELD_ROWS.map(i => (*/}
        {/*  <div className="Board-row"*/}
        {/*       key={`row-key-${i}`}*/}
        {/*  >*/}
        {/*    <Square index={i} {...defaultProps}  />*/}
        {/*    <Square index={i + 3} {...defaultProps} />*/}
        {/*    <Square index={i + 4} {...defaultProps} />*/}
        {/*  </div>*/}
        {/*))}*/}
        {this.state.fieldRows.map(i => (
          <div className="Board-row"
                key={`row-key-${Math.random()}`}
          >
            <Square value={this.state.fieldRows[i]} {...defaultProps} />

          </div>
        ))}
      </div>
    );
  }
}

export default Board;