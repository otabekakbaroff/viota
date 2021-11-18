import { combineReducers } from 'redux'
import {messageReducer} from '../reducers/sendMessage'

const allReducers = combineReducers({
    msg:messageReducer,
})



export default allReducers