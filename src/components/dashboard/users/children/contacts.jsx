import usersStyles from "../usersStyles"
import { connect } from 'react-redux';
import { getFriendsList, selectFriend, friendsListSet} from "../../../redux/action";
import { useEffect } from "react";
import { Button } from "@material-ui/core";

function Contacts(props){
   const {friendsList, getFriendsList, selectFriend,friendsListCheck} = props
   const handleClickEvent = (e) =>{
        selectFriend(e.target.id)
   }

    useEffect(()=>{
        getFriendsList()
        friendsListSet()
    },[getFriendsList,friendsListSet])
    const users_classes = usersStyles()
    return(
           <div className={users_classes.contacts}>
                {friendsList.map(item=>(
                     <div 
                        key={Math.random()*9999999999} 
                        className={users_classes.contacts_avatar}
                        id={item.username}
                        onClick={handleClickEvent}>
                            <div id={item.username}>
                                <img className={users_classes.contacts_avatar_img}  
                                src={`https://avatars.dicebear.com/api/bottts/${item.username}.svg`} 
                                alt="user's avatar"
                                id={item.username}
                                />
                            </div>
                            <h3 className={users_classes.contacts_avatar_username} id={item.username}>{item.username}</h3>
                            <Button style={{display: friendsListSet.has(item.username) ? 'none':'block'}} className={users_classes.contacts_add_friend_button}>Add friend</Button>
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
      selectFriend
    })(Contacts);