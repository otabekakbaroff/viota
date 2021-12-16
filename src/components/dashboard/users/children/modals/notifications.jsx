import { useState } from 'react';
import { Typography, Fade, Modal, Box, Backdrop, Badge, IconButton, Button  } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import usersStyles from "../../usersStyles"
import { connect } from 'react-redux';
import {friendsRequest, acceptRequest,declineRequest,socket} from "../../../../redux/action"
import {useDispatch} from 'react-redux'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '85%',
  width: '35%',
  bgcolor: '#141414',
  border: '2px solid #1c1c1c',
  boxShadow: 24,
  p: 4,
};

function Notifications(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const users_classes = usersStyles()

  const {acceptRequest, declineRequest, friendsRequest, friendsRequestList} = props

  const dispatch = useDispatch()

  useState(()=>{
    socket.on('friend-request',data =>{
      dispatch({ type: 'ADD_REQUEST', payload: {from: data.from} })
    })
    friendsRequest()
  },[friendsRequest])
  return (
    <div>
       <IconButton onClick={handleOpen}>
            <Badge className={friendsRequestList.length !==0 ? 
              users_classes.profile_modal_notifications_badge
              : 
              users_classes.profile_modal_notifications_badge_empty}  
              badgeContent={friendsRequestList.length}>
                  <NotificationsIcon  />
            </Badge>
        </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Friend requests
            </Typography>
            <Typography id="transition-modal-description" >
              add friends
            </Typography>
            <div  className={users_classes.profile_modal_notifications}>               
                {friendsRequestList.map(item=>(
                     <div className={users_classes.profile_modal_notifications_userBox} key={Math.random()*999999999}>
                     <div className={users_classes.profile_modal_notifications_profile}>
                         <img className={users_classes.profile_modal_notifications_img} src={`https://avatars.dicebear.com/api/bottts/${item.from}.svg`} alt="John robot emoji"/>
                         <h3>{item.from}</h3>
                     </div>
                     <div className={users_classes.profile_modal_notifications_buttons}>
                         <Button onClick={()=>{acceptRequest({from:localStorage.getItem('username'), to:item.from, status:2})}}  
                         className={users_classes.profile_modal_notifications_accept_button} 
                         variant="contained"
                         >Accept</Button>
                         <Button 
                         onClick={()=>{declineRequest({from:localStorage.getItem('username'), to:item.from, status:1})}}
                         className={users_classes.profile_modal_notifications_decline_button} 
                         variant="outlined"
                         >Decline</Button>
                     </div>
                    </div>
                ))}
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}



const mapStateToProps = state => {
    return {
        ...state
    }
}
  
  export default connect(mapStateToProps, {
    friendsRequest,
    acceptRequest,
    declineRequest
    })(Notifications);