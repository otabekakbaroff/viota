import msgStyles from '../messagesStyles'
import { connect } from 'react-redux';
import { getMyMessages, receiverMessage, socket } from '../../../redux/action';
import { useEffect } from 'react';

function ChatBox(props){
    const msg_classes = msgStyles()

    const {selectedFriend, myMessages, getMyMessages, receiverMessage} = props

    useEffect(()=>{
        socket.emit('user-info', localStorage.getItem('username'))
        socket.on('confirm', data=>{
            console.log(data)
        })
        socket.on('private-message', data=>{
            console.log(data)
            receiverMessage(data)
            document.querySelector('#chatBox').scrollTo({top:document.querySelector('#chatBox').scrollHeight, behavior:'smooth'})
        })
        getMyMessages({from:selectedFriend.username, to:localStorage.getItem('username')})
        document.querySelector('#chatBox').scrollTo({top:document.querySelector('#chatBox').scrollHeight, behavior:'smooth'})
    },[selectedFriend,getMyMessages,receiverMessage])
    return(
        <div className={msg_classes.chatBox} id='chatBox'>
           {myMessages.map(item=>(
               <div 
               className={
               item.from === selectedFriend.username ? msg_classes.chatBox_received:msg_classes.chatBox_sent} 
               key={Math.random()*99999999}>{item.message}</div>
           ))}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        ...state
    }
}
  
  export default connect(mapStateToProps, {receiverMessage,getMyMessages})(ChatBox);