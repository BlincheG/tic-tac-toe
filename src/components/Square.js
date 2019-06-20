import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Square extends Component {
  render() {
    return (
      <div className="Square" onClick={this.props.onClick}>
        {this.props.value}
      </div>
    );
  }
}

export default Square;

Square.propTypes = {
  value: PropTypes.array,
  onClick: PropTypes.func.isRequired
};
