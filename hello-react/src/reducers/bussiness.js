import axios from 'axios';
import Action from '../actions'


var initialState = {
  b_list:[],
}


  axios.get('http://localhost:3333/business')
    .then(response => {
      this.setState({ b_list: response.data });
    })
    .catch(function (error) {
      console.log(error);
    })


function busReducer(state = initialState, action) {
  switch (action.type) {
      case Action.INCREMENT:
          return {
              b_list: state.GETLIST,
          }
      default:
          return state
  }
}

export default busReducer;
