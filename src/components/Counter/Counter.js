import React, {Component} from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <h1>{this.props.ctr}</h1>
        <button onClick={this.props.increaseCounter}>Increase</button>
        <button>Decrease</button>
        <button onClick={this.props.addCounter}>Increase by 5</button>
        <button>Descrease by 5</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch({type: 'INCREMENT'}),
    addCounter: () => dispatch({type: 'ADD', value: 5})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);