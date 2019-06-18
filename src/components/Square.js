import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  onSquareClick = () => {
    if (!this.state.value) {
      this.setState({value: this.props.currentPlayer});
      this.props.onClick();
    }
  };

  render() {
    return (
      <div className="Square" onClick={this.onSquareClick}>
        {this.state.value}
      </div>
    );
  }
}

export default Square;

Square.propTypes = {
  value: PropTypes.string,
  currentPlayer: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};