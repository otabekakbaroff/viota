import Header from './children/header.jsx'
import Chatbox from './children/chatBox.jsx'
import Sendbox from './children/sendBox.jsx'
import msgStyles from './messagesStyles.jsx'

function Messages(){
    const msg_classes = msgStyles()
    return(
        <div className={msg_classes.main}>
            <Header/>
            <Chatbox/>
            <Sendbox/>
        </div>
    )
}

export default Messages

