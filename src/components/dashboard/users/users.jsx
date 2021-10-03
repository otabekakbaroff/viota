import Profile from './children/profile.jsx';
import Contacts from './children/contacts.jsx';
import Search from './children/search.jsx';
import usersStyles from './usersStyles.jsx';

function Users(){
    const users_classes = usersStyles()
    return(
        <div className={users_classes.main}>
            <Profile/>
            <Search/> 
            <Contacts/>
        </div>
    )
}


export default Users