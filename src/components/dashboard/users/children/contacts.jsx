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


   const handleClickEvent = (e) =>{
       console.log('handleClickEvent')
        selectFriend(e.target.id)
   }

    useEffect(()=>{
        console.log('getFriendsList-useEffect')
        getFriendsList()
    },[getFriendsList])
    
    const users_classes = usersStyles()
    
    const handleAddFriend = (e) =>{
        console.log('handleAddFriend')
        sendRequest(e.target.id)
    }
    const handleAccept = (e) =>{
        console.log('handleAccept')
        acceptRequest({from:localStorage.getItem('username'),to:e.target.id,status:2})
    }

    return(
           <div className={users_classes.contacts}>
                 {searchResult.length === 0 
                 ?
                 friendsList.map(item=>(
                     <div 
                        key={Math.random()*9999999999} 
                        className={users_classes.contacts_profile}
                        id={item.username}
                        onClick={handleClickEvent}>
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
                       id={item.username}
                       onClick={handleClickEvent}>
                           <div className={users_classes.contacts_profile_avatar} id={item.username}>
                               <img className={users_classes.contacts_profile_img}  
                               src={`https://avatars.dicebear.com/api/bottts/${item.username}.svg`} 
                               alt="user's avatar"
                               id={item.username}
                               />
                               <h3 className={users_classes.contacts_profile_username} id={item.username}>{item.username}</h3>
                           </div>
                           <Button
                           style={{display: (friendListState.has(item.username)) || friendRequestState.has(item.username) ? 'none':'block'}}
                           id={item.username}
                           className={users_classes.contacts_add_friend_button}
                           onClick={handleAddFriend}>Add friend</Button>
                            <Button
                           style={{display: (friendRequestState.has(item.username) ? 'block':'none')}}
                           id={item.username}
                           className={users_classes.contacts_add_friend_button}
                           onClick={handleAccept}>Accept</Button>
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