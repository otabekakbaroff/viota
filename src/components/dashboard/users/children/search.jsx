import usersStyles from "../usersStyles"
import SearchIcon from '@material-ui/icons/Search';
function Search(){
    const users_classes = usersStyles()
    return(
        <div className={users_classes.search}>
               <input className={users_classes.search_input}  placeholder="Search of users..." />
        </div>

    )
}



export default Search