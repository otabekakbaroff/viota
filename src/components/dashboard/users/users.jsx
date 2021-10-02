import Profile from './children/profile.jsx';
import Contacts from './children/contacts.jsx';
import Search from './children/search.jsx';

function Users(){
    return(
        <div className="users">
            <Profile/>
            <Contacts/>
            <Search/> 
        </div>
    )
}


export default Users