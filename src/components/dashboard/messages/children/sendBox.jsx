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
import {sendMessage} from '../../../action'
import {useDispatch} from 'react-redux'
function SendBox(){
    const [text,setText] = useState({text:'',date:'',sender:'',receiver:''}) 
    const msg_classes = msgStyles()
    const dispatch = useDispatch()
    const date = new Date();
    const handleChange = (e) =>{
        setText({
            ...text,
            text:e.target.value
        })
    }

    const Submit = () =>{
        dispatch(sendMessage({
            ...text,
            date:date.getTime(),
            sender:'ME',
            receiver:'YOU'
        }))
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


export default SendBox;




