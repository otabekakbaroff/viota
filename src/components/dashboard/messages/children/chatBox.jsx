import msgStyles from '../messagesStyles'
import { connect } from 'react-redux';
import { getMyMessages } from '../../../redux/action';
import { useEffect } from 'react';

function ChatBox(props){
    const msg_classes = msgStyles()

    const {selectedFriend, myMessages, getMyMessages} = props
    console.log(selectedFriend, myMessages)
    // const msg = useSelector( state => state.msg )
    useEffect(()=>{
        getMyMessages(selectedFriend)
    },[getMyMessages])
    return(
        <div className={msg_classes.chatBox}>
           <div className={msg_classes.chatBox_sent} key={Math.random()*99999999}>
               Hello Man, what is new
           </div>
           <div className={msg_classes.chatBox_sent} key={Math.random()*99999999}>
               Hello Man
           </div>
           <div className={msg_classes.chatBox_received} key={Math.random()*99999999}>
               Hey, whats up?! How you been?
           </div>
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