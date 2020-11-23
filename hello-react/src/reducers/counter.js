import Action from '../actions'
import axios from 'axios';

var initialState = {
    b_list:[],
    couter: 0,
    text: ""
}

axios.get('http://localhost:3333/business')
  .then(response => {
    this.setState({ b_list: response.data });
  })
  .catch(function (error) {
    console.log(error);
  })


function counterReducer(state = initialState, action) {
    switch (action.type) {
        case Action.INCREMENT:
            return {
                couter: state.couter + 1,
                text: action.text
            }
        case Action.DECREMENT:
            return {
                couter: state.couter - 1,
                text: action.text
            }
        case Action.GETLIST:
        axios.get('http://localhost:3333/business')
          .then(response => {
            console.log(response.data);
            return {
              b_list: response.data
          }

          })
          .catch(function (error) {
            console.log(error);
            return {
              b_list: state.b_list
            }
          })

        default:
            return state
    }
}

export default counterReducer;
