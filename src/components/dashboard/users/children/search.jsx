import usersStyles from "../usersStyles"
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

function Search(){
    const users_classes = usersStyles()
    return(
        <TextField 
        className={users_classes.search} 
        fullWidth 
        placeholder="Search of users..." 
        variant="outlined" 
        InputProps={{
            disableOutline: true, 
            className:users_classes.search_input,
            endAdornment: (
            <InputAdornment  >
                <SearchIcon className={users_classes.search_icon}/>
            </InputAdornment>
            )
        }} />

    )
}



export default Search