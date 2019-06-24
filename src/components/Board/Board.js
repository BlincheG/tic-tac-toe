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
          {fieldRows.map((item, index) =>
            <Square
              value={item}
              onClick={() => this.props.handleClick(index)}
              key={index}
            />
          )}
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
