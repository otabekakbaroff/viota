import usersStyles from "../usersStyles"
import SearchIcon from '@material-ui/icons/Search';
// import InputAdornment from "@material-ui/core/InputAdornment";
// import TextField from '@material-ui/core/TextField';


function Search(){
    const users_classes = usersStyles()
    return(
        // <div className={users_classes.search}>
        //     <TextField 
        //     className={users_classes.search_textField}
        //     fullWidth 
        //     placeholder="Search of users..." 
        //     variant="outlined" 
        //     focused
        //     InputProps={{
        //         className:users_classes.search_input,
        //         endAdornment: (
        //         <InputAdornment  >
        //             <SearchIcon />
        //         </InputAdornment>
        //         )
        //     }} />
        //     <SearchIcon className={users_classes.search_icon} />
        // </div>
        <div className={users_classes.search}>
            <div className={users_classes.search_textField}>
                <input placeholder="Search for users..." className={users_classes.search_input}/>
                <i><SearchIcon className={users_classes.search_icon_desktop} id="search_icon_mobile"/></i>
            </div>
            <SearchIcon className={users_classes.search_icon_mobile} />
        </div>
    )
}



export default Search