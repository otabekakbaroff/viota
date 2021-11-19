import { combineReducers } from 'redux'
import {messageReducer} from './sendMessage'

const allReducers = combineReducers({
    msg:messageReducer,
})



export default allReducers