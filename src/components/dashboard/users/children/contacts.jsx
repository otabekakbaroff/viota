import usersStyles from "../usersStyles"
import { connect } from 'react-redux';
import { getFriendsList, selectFriend, friendsListSet, sendRequest} from "../../../redux/action";
import { useEffect } from "react";
import { Button } from "@material-ui/core";

function Contacts(props){
   const {friendsList, getFriendsList,friendsListSet, selectFriend,friendsListCheck,sendRequest} = props
   const handleClickEvent = (e) =>{
        selectFriend(e.target.id)
   }

    useEffect(()=>{
        getFriendsList()
        friendsListSet()
    },[getFriendsList,friendsListSet])
    
    const users_classes = usersStyles()
    
    const handleOnClick = (e) =>{
        sendRequest(e.target.id)
    }

    return(
           <div className={users_classes.contacts}>
                {friendsList.map(item=>(
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
                            id={item.username}
                            style={{display:friendsListCheck.has(item.username)? 'none':'block'}} 
                            className={users_classes.contacts_add_friend_button}
                            onClick={handleOnClick}
                            >Add friend</Button>
                      </div>        
                ))}
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
      friendsListSet,
      selectFriend,
      sendRequest
    })(Contacts);