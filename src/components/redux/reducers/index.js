import { combineReducers } from 'redux'
import { authUser } from './authReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { friendsList } from './friendsList'
import { selectedFriend } from './selectFriend'
import { myMessages } from './myMessages'
import {friendsRequestList} from './friendRequests'
import {searchResult} from './searchUser'
const persistConfig = {
    key:'root',
    storage,
    whitelist:[authUser,friendsList,selectedFriend]
}


const allReducers = combineReducers({
    authUser,
    friendsList,
    selectedFriend,
    myMessages,
    friendsRequestList,
    searchResult,
})



export default persistReducer(persistConfig,allReducers)