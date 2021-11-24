import msgStyles from '../messagesStyles'
import { connect } from 'react-redux';
import { getMyMessages } from '../../../redux/action';
import { useEffect } from 'react';

function ChatBox(props){
    const msg_classes = msgStyles()

    const {selectedFriend, myMessages, getMyMessages} = props

    useEffect(()=>{
        getMyMessages({from:selectedFriend.username, to:localStorage.getItem('username')})
    },[selectedFriend,getMyMessages])
    return(
        <div className={msg_classes.chatBox}>
           {myMessages.map(item=>(
               <div className={msg_classes.chatBox_sent} key={Math.random()*99999999}>{item.message}</div>
           ))}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        ...state
    }
}
  
  export default connect(mapStateToProps, {getMyMessages})(ChatBox);