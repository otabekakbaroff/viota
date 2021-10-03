import usersStyles from "../usersStyles"
import IconButton from "@material-ui/core/IconButton";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditIcon from '@material-ui/icons/Edit';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Badge from '@material-ui/core/Badge';

function Profile(){
    const users_classes = usersStyles()
    return(
           <div className={users_classes.profile}>
                <div className={users_classes.profile_leftContainer}>
                    <img className={users_classes.profile_img} 
                     style={{backgroundColor:`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`}}  
                    src={`https://avatars.dicebear.com/api/bottts/${localStorage.getItem('username')}.svg`} alt="your profile avatar"/>
                    <h3>{localStorage.getItem('username')}</h3>
                </div>
                <div className={users_classes.profile_actions}>
                    <IconButton >
                        <Badge badgeContent={999}>
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>

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



export default Profile