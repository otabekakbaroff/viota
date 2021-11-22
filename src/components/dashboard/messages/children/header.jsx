import IconButton from "@material-ui/core/IconButton";
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import msgStyles from '../messagesStyles'
import { connect } from 'react-redux';



function Header(props){
        const msg_classes = msgStyles()

        const {selectedFriend} = props

        return (
            <div className={msg_classes.header}>
                <div className={msg_classes.header_avatar}>
                    <img className={msg_classes.header_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/Joseph.svg`} alt="user's avatar"/>
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