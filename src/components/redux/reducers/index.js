import { combineReducers } from 'redux'
import { authUser } from './authReducer'
import {messagesReducer} from './messagesReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { friendsList } from './friendsListReducer'
import { selectedFriend } from './selectFriendReducer'
import { myMessages } from './myMessagesReducer'
import {friendsRequestList} from './friendRequestReducer'

const persistConfig = {
    key:'root',
    storage,
    whitelist:[authUser,messagesReducer,friendsList,selectedFriend]
}


const allReducers = combineReducers({
    msg:messagesReducer,
    authUser,
    friendsList,
    selectedFriend,
    myMessages,
    friendsRequestList
})



export default persistReducer(persistConfig,allReducers)