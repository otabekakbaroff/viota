import React,{useState,useContext} from 'react'
import { Context } from '../../Context';

function Chatroom(){
    const chatbox = useContext(Context).chatbox;
    const socket = useContext(Context).socket;
    const set_chatbox = useContext(Context).set_chatbox;
    const [message,set_message] = useState({
        message:''
    })
    
    const handleChange = e =>{
        set_message({...message,[e.target.name]:e.target.value})
    }

    const submit = e =>{
        e.preventDefault()
        set_chatbox([...chatbox, message])
        socket.emit('private-message', 
        {
            message:message.message,
            from:localStorage.getItem('username'),
            to:localStorage.getItem('receiver-username'),
            socketId:socket.id
        }
        )
    }
    return(
        <div className="chat-room">
             <div className="chat-box">
                 {chatbox.map(item=>(
                     <div key={Math.random()*9999999999}>{item.message}</div>
                 ))}
             </div>
             <form>
                <input onChange={handleChange} placeholder=" Type here..." name="message" type="text"  id="message"/>
                <button onClick={submit}>send</button>
             </form>
        </div>
    )
}


export default Chatroom