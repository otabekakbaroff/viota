import { combineReducers } from 'redux'
import { authUser } from './authReducer'
import {messagesReducer} from './messagesReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { friendsList } from './friendsListReducer'
import { selectedFriend } from './selectFriendReducer'

const persistConfig = {
    key:'root',
    storage,
    whitelist:[authUser,messagesReducer,friendsList,selectedFriend]
}


const allReducers = combineReducers({
    msg:messagesReducer,
    authUser,
    friendsList,
    selectedFriend
})



export default persistReducer(persistConfig,allReducers)