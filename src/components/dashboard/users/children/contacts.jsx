import usersStyles from "../usersStyles"
import { connect } from 'react-redux';
import { getFriendsList } from "../../../redux/action";
import { useEffect } from "react";


function Contacts(props){
   const {friendsList, getFriendsList} = props
   let array = []
   const handleClickEvent = (e) =>{
        if(array.length>=1){
            let element = array.pop()
            element.style.backgroundColor = '#20262a'
            array.push(e.target)
            array[0].style.backgroundColor="#2c3032"
        }else{
            array.push(e.target)
            array[0].style.backgroundColor="#2c3032"
        }
        
   }

    useEffect(()=>{
        getFriendsList()
    },[getFriendsList])
    const users_classes = usersStyles()
    return(
           <div className={users_classes.contacts}>
                {friendsList.map(item=>(
                     <div key={Math.random()*9999999999} className={users_classes.contacts_avatar}
                     onClick={handleClickEvent}>
                            <img className={users_classes.contacts_avatar_img}  
                            src={`https://avatars.dicebear.com/api/bottts/${item.username}.svg`} 
                            alt="user's avatar"/>
                            <h3 className={users_classes.contacts_avatar_username}>{item.username}</h3>
                      </div>
                ))}

           </div>
    )
}




const mapStateToProps = state => {
    return {
        ...state
    }
}
  
  export default connect(mapStateToProps, {
      getFriendsList,
    })(Contacts);