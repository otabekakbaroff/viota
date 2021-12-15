import usersStyles from "../usersStyles"
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { searchUser } from "../../../redux/action";
import {socket} from "../../../redux/action"
import {useDispatch} from 'react-redux'
import { useEffect } from "react";


function Search(props){
    const users_classes = usersStyles()

    const {searchUser} = props

    const dispatch = useDispatch()

    const handleChange = (e) =>{
        searchUser({username:localStorage.getItem('username'), receiver:e.target.value})
    }
    useEffect(()=>{
        socket.on('user-search', data=>{
            if(data !== 'error'){
                dispatch({type:'USER_SEARCH', payload: data})
            }else{
                dispatch({type:'USER_SEARCH', payload: []})
            }
        })
    },[dispatch])
    return(
        <div className={users_classes.search}>
            <div className={users_classes.search_textField}>
                <input onChange={handleChange} placeholder="Search for users..." className={users_classes.search_input}/>
                <i><SearchIcon id="search_icon_desktop" className={users_classes.search_icon_desktop}  /></i>
            </div>
            <SearchIcon className={users_classes.search_icon_mobile} id="search_icon_mobile"/>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        ...state
    }
}
  
  export default connect(mapStateToProps, {
      searchUser,
    })(Search);