import { useState } from 'react'
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
import {sendMessage} from '../../../redux/action'


function SendBox(props){

    const [text,setText] = useState({message:'', date:'', from:'', to:''}) 
    const msg_classes = msgStyles()

    const {selectedFriend,sendMessage} = props
    const d = new Date();

    const handleChange = (e) =>{
        setText({
            ...text,
            message:e.target.value
        })
    }

    const Submit = (e) =>{
        e.preventDefault()
        sendMessage({
            ...text,
            from:localStorage.getItem('username'),
            to: selectedFriend.username,
            date: d.getTime()
        })
    }

    return (
        <div className={msg_classes.sendBox} >

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
                        <SendIcon  type="Submit"  id="send-icon"/>
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
export default connect(mapStateToProps, {
    sendMessage,
  })(SendBox);


