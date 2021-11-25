import { combineReducers } from 'redux'
import { authUser } from './authReducer'
import {messagesReducer} from './messagesReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { friendsList } from './friendsListReducer'
import { selectedFriend } from './selectFriendReducer'
import { myMessages } from './myMessagesReducer'

const persistConfig = {
    key:'root',
    storage,
    whitelist:[authUser,messagesReducer,friendsList,selectedFriend,myMessages]
}


const allReducers = combineReducers({
    msg:messagesReducer,
    authUser,
    friendsList,
    selectedFriend,
    myMessages,
})



export default persistReducer(persistConfig,allReducers)