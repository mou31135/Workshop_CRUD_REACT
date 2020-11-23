import React, { Component } from 'react';
import Action from '../actions';
import { connect } from 'react-redux'

import Counter from './couter';

class R_index extends Component {

  render() {
    return (
      <div className="App">
        <Counter
          value={this.props.counter}
          onIncrement={() => this.props.increment()}
          onDecrement={() => this.props.decrement()}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch({type: Action.INCREMENT, text: "INCREMENT Redux"}),
    decrement: () => dispatch({type: Action.DECREMENT, text: "DECREMENT Redux"}),
});

export default connect(mapStateToProps, mapDispatchToProps)(R_index);
