import usersStyles from "../usersStyles"
import { connect } from 'react-redux';
import {  getFriendsList, selectFriend,  sendRequest,acceptRequest} from "../../../redux/action";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";


function Contacts(props){
   console.log('render')
   const {friendsList, friendsRequestList,acceptRequest, getFriendsList, selectFriend,sendRequest, searchResult} = props
   
   const [friendListState, setFriendListState] = useState(new Set())

   const [friendRequestState, setFriendRequestState ] = useState(new Set())
   
    useEffect(()=>{
        console.log('sets-UseEffect')
        setFriendListState(new Set(friendsList.map(item=> item.username)))
        setFriendRequestState(new Set(friendsRequestList.map(item=> item.from)))
    },[friendsList,friendsRequestList])


    useEffect(()=>{
        console.log('getFriendsList-useEffect')
        getFriendsList()
    },[getFriendsList])
    
    const users_classes = usersStyles()
    
    return(
           <div className={users_classes.contacts}>
                 {searchResult.length === 0 
                 ?
                 friendsList.map(item=>(
                     <div 
                        key={Math.random()*9999999999} 
                        className={users_classes.contacts_profile}
                        onClick={()=>{selectFriend(item.username)}}>
                            <div className={users_classes.contacts_profile_avatar} id={item.username}>
                                <img className={users_classes.contacts_profile_img}  
                                src={`https://avatars.dicebear.com/api/bottts/${item.username}.svg`} 
                                alt="user's avatar"
                                id={item.username}
                                />
                                <h3 className={users_classes.contacts_profile_username} id={item.username}>{item.username}</h3>
                            </div>
                      </div>        
                ))
                :
                searchResult.map(item=>(
                    <div 
                       key={Math.random()*9999999999} 
                       className={users_classes.contacts_profile}
                       onClick={()=>{selectFriend(item.username)}}>
                           <div className={users_classes.contacts_profile_avatar} >
                               <img className={users_classes.contacts_profile_img}  
                               src={`https://avatars.dicebear.com/api/bottts/${item.username}.svg`} 
                               alt="user's avatar"
                               />
                               <h3 className={users_classes.contacts_profile_username} >{item.username}</h3>
                           </div>
                           <Button
                           style={{display: (friendListState.has(item.username)) || friendRequestState.has(item.username) ? 'none':'block'}}
                           className={users_classes.contacts_add_friend_button}
                           onClick={()=>{sendRequest(item.username)}}>Add friend</Button>
                            <Button
                           style={{display: (friendRequestState.has(item.username) ? 'block':'none')}}
                           className={users_classes.contacts_add_friend_button}
                           onClick={()=>{acceptRequest({from:localStorage.getItem('username'),to:item.username,status:2})}}>Accept</Button>
                     </div>        
               ))
                }
           </div>
    )
}




const mapStateToProps = state => {
    return {
        ...state
    }
}
  
  export default connect(mapStateToProps, {
      getFriendsList, 
      selectFriend,
      sendRequest,
      acceptRequest
    })(Contacts);