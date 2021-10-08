import usersStyles from "../usersStyles"
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

function Search(){
    const users_classes = usersStyles()
    return(
        <div className={users_classes.search} id="search" >
            <TextField 
            className={users_classes.search_textField}
            id="search_textField" 
            fullWidth 
            placeholder="Search of users..." 
            variant="outlined" 
            focused
            InputProps={{
                className:users_classes.search_input,
                id:"search_input",
                endAdornment: (
                <InputAdornment  >
                    <SearchIcon />
                </InputAdornment>
                )
            }} />
            <SearchIcon className={users_classes.search_icon} id="search_icon" />
        </div>
    )
}



export default Search