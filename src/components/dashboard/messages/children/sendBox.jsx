import { useState } from 'react'
import SendIcon from '@material-ui/icons/Send';
import IconButton from "@material-ui/core/IconButton";
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import MicIcon from '@material-ui/icons/Mic';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';


function SendBox(){
    
    const [text,setText] = useState('') 

    const handleChange = (e) =>{
        setText(e.target.value)
    }

    const Submit = () =>{
        console.log(text)
    }

    return (
        <div className="send-box">

                <IconButton >
                    <PhotoCameraIcon />
                </IconButton>

                <TextField onChange={handleChange}fullWidth  id="text" className="textareawidth" label="Type here..." variant="outlined" name="message" 
                InputProps={{
                    endAdornment: (        
                    <InputAdornment>
                        <IconButton  >
                            <MicIcon />
                        </IconButton>
                        <IconButton >
                            <PhotoLibraryIcon />
                         </IconButton>
                        <IconButton >
                            <EmojiEmotionsIcon />
                        </IconButton>
                    </InputAdornment>
                )}}/>

                <div className="send-button-box">
                    <IconButton type="Submit" id="send-button" onClick = {Submit}>
                        <SendIcon type="Submit"  id="send-icon"/>
                    </IconButton>
                </div>
                
            </div>
    )
}


export default SendBox;




