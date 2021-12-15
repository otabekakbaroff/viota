import msgStyles from '../messagesStyles'
import { connect } from 'react-redux';
import { getMyMessages, receiverMessage, socket } from '../../../redux/action';
import { useEffect } from 'react';

function ChatBox(props){
    const msg_classes = msgStyles()

    const {selectedFriend, myMessages, getMyMessages, receiverMessage} = props

    useEffect(()=>{
        getMyMessages({from:selectedFriend.username, to:localStorage.getItem('username')})
    },[selectedFriend,getMyMessages])
    useEffect(()=>{
        socket.on('private-message', data=>{
            receiverMessage(data)
        })
    },[receiverMessage])
    useEffect(()=>{
        socket.on('confirm', data=>{
            console.log(data)
        })
        socket.emit('user-info', localStorage.getItem('username'))
    },[])
    
    return(
        <div className={msg_classes.chatBox} id='chatBox'> 
           {myMessages.map(item=>(
               <div 
               style={{display:(
                   (localStorage.getItem('username') === item.to && selectedFriend.username === item.from) ||
               (localStorage.getItem('username') === item.from && selectedFriend.username === item.to) &&
               (localStorage.getItem('username') !== selectedFriend.username) 
               ) ? 'block': 'none' }}
               className={
               item.from === selectedFriend.username ? msg_classes.chatBox_received:msg_classes.chatBox_sent} 
               key={Math.random()*99999999}>
                   {item.message}
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
  
  export default connect(mapStateToProps, {receiverMessage,getMyMessages})(ChatBox);