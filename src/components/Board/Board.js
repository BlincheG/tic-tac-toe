import React, {Component} from 'react';
import Square from '../Square';
import {connect} from 'react-redux';
import { calculateWinner } from '../../common/common'

import { handleClick, newGame } from '../../store/actions';

// TODO destructorization, change Board-row, read redux modules, redux immutable

class Board extends Component {
  render() {
    const { newGame, fieldRows } = this.props;
    let status;
    const winner = calculateWinner(fieldRows);
    if (winner) {
      status = `Победитель: ${winner}`;
    }
    else {
      status = 'Следующий игрок: ' + (this.props.currentPlayer ? 'X' : 'O');
    }

    return (
      <div className="Board">
        <div className="status">
          {status}
        </div>

        <button onClick={newGame}>Начать заново</button>

        <div className="Board-row">
          <Square value={this.props.fieldRows[0]} onClick={() => this.props.handleClick(0)} />
          <Square value={this.props.fieldRows[1]} onClick={() => this.props.handleClick(1)}  />
          <Square value={this.props.fieldRows[2]} onClick={() => this.props.handleClick(2)}  />
        </div>
        <div className="Board-row">
          <Square value={this.props.fieldRows[3]} onClick={() => this.props.handleClick(3)}  />
          <Square value={this.props.fieldRows[4]} onClick={() => this.props.handleClick(4)}  />
          <Square value={this.props.fieldRows[5]} onClick={() => this.props.handleClick(5)}  />
        </div>
        <div className="Board-row">
          <Square value={this.props.fieldRows[6]} onClick={() => this.props.handleClick(6)}  />
          <Square value={this.props.fieldRows[7]} onClick={() => this.props.handleClick(7)}  />
          <Square value={this.props.fieldRows[8]} onClick={() => this.props.handleClick(8)}  />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fieldRows: state.fieldRows,
    currentPlayer: state.currentPlayer
  };
}

const mapDispatchToProps = dispatch => {
  return {
    handleClick: (value) => dispatch(handleClick(value)),
    newGame: () => dispatch(newGame()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
