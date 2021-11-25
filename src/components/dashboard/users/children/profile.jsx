import usersStyles from "../usersStyles"
import IconButton from "@material-ui/core/IconButton";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import EditIcon from '@material-ui/icons/Edit';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Badge from '@material-ui/core/Badge';
import { connect } from 'react-redux';
import Notifications from "./modals/notifications";

function Profile(){
    const users_classes = usersStyles()

    return(
           <div className={users_classes.profile}>
                <div className={users_classes.profile_leftContainer}>
                    <img className={users_classes.profile_img} 
                    src={`https://avatars.dicebear.com/api/bottts/${localStorage.getItem('username')}.svg`} alt="your profile avatar"/>
                    <h2 className={users_classes.profile_username}>{localStorage.getItem('username')}</h2>
                </div>
                <div className={users_classes.profile_actions}>
                    <Notifications/>
                    <IconButton >
                        <Badge badgeContent={'Hello'}>
                            <GroupAddIcon />
                        </Badge>
                    </IconButton>
                    <IconButton >
                        <VideoCallIcon/>
                    </IconButton>
                    <IconButton >
                        <EditIcon />
                    </IconButton>
                </div>
           </div>
    )
}


const mapStateToProps = state => {
    return {
        username: state.username,
        token: state.token,
        chatted_last:state.chatted_last
    }
  }
  
  export default connect(mapStateToProps, {})(Profile);