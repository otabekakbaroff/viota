import msgStyles from '../messagesStyles'
// import {useSelector} from 'react-redux'



function ChatBox(){
    const msg_classes = msgStyles()
    // const msg = useSelector( state => state.msg )

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
           {/* {msg.map(item=>(
               <div className={msg_classes.chatBox_sent} key={Math.random()*99999999}>{item.text}</div>
           ))} */}
        </div>
    )
}

export default ChatBox;