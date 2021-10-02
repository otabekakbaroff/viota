import Header from './children/header.jsx'
import Chatbox from './children/chatBox.jsx'
import Sendbox from './children/sendBox.jsx'


function Messages(){
    return(
        <div className="messages">
            <Header/>
            <Chatbox/>
            <Sendbox/>
        </div>
    )
}

export default Messages

