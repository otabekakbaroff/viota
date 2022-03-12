// import IconButton from "@material-ui/core/IconButton";
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import msgStyles from '../messagesStyles'
import usersStyles from '../../users/usersStyles'
import { connect } from 'react-redux';
import { ArrowBack } from '@material-ui/icons';
import { Badge, IconButton  } from '@material-ui/core';

function Header(props){

        const msg_classes = msgStyles()
        
        const users_classes = usersStyles()


        const {selectedFriend} = props



        function handleClose(){
            document.querySelector(`.${users_classes.main}`).style.display = 'flex'
            document.querySelector(`.${msg_classes.main}`).style.display = 'none'
        }

        return (
            <div className={msg_classes.header}>
                <IconButton onClick={handleClose}>
                    <Badge>
                        <ArrowBack />
                    </Badge>
                </IconButton>
                <div className={msg_classes.header_avatar}>
                    <img className={msg_classes.header_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/${selectedFriend.username}.svg`} alt="user's avatar"/>
                    <h3>{selectedFriend.username}</h3>
                </div>
                <div className={msg_classes.header_icons}>
                    <IconButton >
                        <CallIcon/>
                    </IconButton>
                    <IconButton >
                        <VideocamIcon/>
                    </IconButton>
                  </div>
            </div>
        )
}

const mapStateToProps = state => {
    return {
        ...state
    }
}
  
  export default connect(mapStateToProps, {})(Header);