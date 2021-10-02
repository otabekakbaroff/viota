import dashStyles from "./dashStyles"
import Users from './users/users';
import Messages from './messages/messages'

function Dashboard(){
    const classes = dashStyles()
    return(
        <div className={classes.main}>
            <Users/>
            <Messages/>
        </div>
    )
}

export default Dashboard

