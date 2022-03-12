import usersStyles from "../usersStyles"
import msgStyles from '../../messages/messagesStyles'
import { connect } from 'react-redux';
import {  getFriendsList, selectFriend  } from "../../../redux/action";
import { useMediaQuery } from "@material-ui/core";
import { useEffect } from "react";



function Contacts(props){
   const {friendsList, getFriendsList, selectFriend, searchResult} = props

   const matches = useMediaQuery('(min-width:600px)');


    useEffect(()=>{
        getFriendsList()
    },[getFriendsList])
    
    const users_classes = usersStyles()
    const msg_classes = msgStyles()


    function handleOpen(){
        if(!matches){
            document.querySelector(`.${users_classes.main}`).style.display = 'none'
            document.querySelector(`.${msg_classes.main}`).style.display = 'flex'
        }
    }

    return(
           <div className={users_classes.contacts}>
                 {(searchResult.length === 0 ? friendsList : searchResult).map(item=>(
                     <div 
                        key={Math.random()*9999999999} 
                        className={users_classes.contacts_profile}
                        onClick={()=>{
                            handleOpen()
                            selectFriend(item.username)
                        }}>
                            <div className={users_classes.contacts_profile_avatar} id={item.username}>
                                <img className={users_classes.contacts_profile_img}  
                                src={`https://avatars.dicebear.com/api/bottts/${item.username}.svg`} 
                                alt="user's avatar"
                                id={item.username}
                                />
                                <h3 className={users_classes.contacts_profile_username} id={item.username}>{item.username}</h3>
                            </div>
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
      selectFriend,
    })(Contacts);