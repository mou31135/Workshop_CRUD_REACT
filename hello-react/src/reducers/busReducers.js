import { combineReducers } from 'redux'
import bussinessReducer from './bussiness'
import Action from './';


export default combineReducers({
    counter: bussinessReducer
})
