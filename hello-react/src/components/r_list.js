import React, { Component } from 'react';
import Action from '../actions';
import { connect } from 'react-redux'

import Counter from './couter';


class R_list extends Component {

  render() {
    return (
      <div className="App">
        <Counter
          value={this.props.counter}
          onIncrement={() => this.props.increment()}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  b_list: state.b_list
});

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch({type: Action.GETLIST}),
});

// this.getlist()

export default connect(mapStateToProps, mapDispatchToProps)(R_list);
