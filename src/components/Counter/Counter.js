import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addCounter, decrementCounter, incrementCounter, subtractCounter} from "../../store/actions";

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <h1>{this.props.ctr}</h1>
        <button onClick={this.props.increaseCounter}>Increase</button>
        <button onClick={this.props.descreaseCounter}>Decrease</button>
        <button onClick={this.props.addCounter}>Increase by 5</button>
        <button onClick={this.props.subtractCounter}>Descrease by 5</button>
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
    increaseCounter: () => dispatch(incrementCounter()),
    descreaseCounter: () => dispatch(decrementCounter()),
    subtractCounter: () => dispatch(subtractCounter(5)),
    addCounter: () => dispatch(addCounter(5))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);