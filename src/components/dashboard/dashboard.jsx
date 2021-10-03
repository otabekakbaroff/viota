import dashStyles from "./dashStyles"
import Users from './users/users';
import Messages from './messages/messages'

function Dashboard(){
    const dash_classes = dashStyles()
    return(
        <div className={dash_classes.main}>
            <Users/>
            <Messages/>
        </div>
    )
}

export default Dashboard

