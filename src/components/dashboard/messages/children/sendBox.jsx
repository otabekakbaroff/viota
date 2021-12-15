import { useState,useEffect } from 'react'
import SendIcon from '@material-ui/icons/Send';
import IconButton from "@material-ui/core/IconButton";
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import MicIcon from '@material-ui/icons/Mic';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import msgStyles from '../messagesStyles'
import { connect } from 'react-redux';
import {sendMessage,acceptRequest,socket} from '../../../redux/action'
import axiosWithAuth from '../../../axiosWithAuth';
import {useDispatch} from 'react-redux'

function SendBox(props){

    const [friendListState, setFriendListState] = useState(new Set())
    const [friendRequestState, setFriendRequestState ] = useState(new Set())

    const dispatch = useDispatch()

    const [text,setText] = useState({message:'', date:'', from:'', to:''}) 
    const msg_classes = msgStyles()

    const {selectedFriend,sendMessage,friendsRequestList,friendsList,acceptRequest} = props
    const d = new Date();


    useEffect(()=>{
        setFriendListState(new Set(friendsList.map(item=> item.username)))
        setFriendRequestState(new Set(friendsRequestList.map(item=> item.from)))
    },[friendsList,friendsRequestList])


    const handleChange = (e) =>{
        setText({
            ...text,
            message:e.target.value
        })
    }

    const Submit = (e) =>{
        e.preventDefault()
        if(friendRequestState.has(selectedFriend.username) && localStorage.getItem('username') !== selectedFriend.username){
            acceptRequest({from:localStorage.getItem('username'),to:selectedFriend.username,status:2})
        }else if(!friendListState.has(selectedFriend.username) && localStorage.getItem('username') !== selectedFriend.username){
            console.log('req')
            socket.emit('friend-request',{to:selectedFriend.username, from:localStorage.getItem('username')})
            axiosWithAuth().post(`/api/connection/send-friend-request`, {from:localStorage.getItem('username'),to:selectedFriend.username})
            .then(response => {
                dispatch({ type: 'UPDATE_FRIENDS_LIST', payload: {username:selectedFriend.username} })
            })
            .catch(error => {
                console.log(error)
            })
        }
        // sendMessage({
        //     ...text,
        //     from:localStorage.getItem('username'),
        //     to: selectedFriend.username,
        //     date: d.getTime() - 1639168052434
        // })
    }

    return (
        <form className={msg_classes.sendBox} >

                <IconButton >
                    <PhotoCameraIcon />
                </IconButton>

                <TextField 
                    onChange={handleChange} 
                    fullWidth  
                    id="text"  
                    placeholder="Type here..." 
                    variant="outlined" 
                    name="message" 
                    InputProps={{
                        className: msg_classes.sendBox_input,
                        endAdornment: (        
                        <InputAdornment>
                            <IconButton  >
                                <MicIcon className={msg_classes.sendBox_input_icons} />
                            </IconButton>
                            <IconButton >
                                <PhotoLibraryIcon className={msg_classes.sendBox_input_icons}/>
                            </IconButton>
                            <IconButton >
                                <EmojiEmotionsIcon className={msg_classes.sendBox_input_icons} />
                            </IconButton>
                        </InputAdornment>)
                        }}
                />

                <div className="send-button-box">
                    <IconButton type="Submit" id="send-button" onClick = {Submit}>
                        <SendIcon   id="send-icon"/>
                    </IconButton>
                </div>
                
            </form>
    )
}


const mapStateToProps = state => {
    return {
        ...state
    }
}
export default connect(mapStateToProps, {
    sendMessage,
    acceptRequest
  })(SendBox);


