import usersStyles from "../usersStyles"

function Contacts(){
    const users_classes = usersStyles()
    return(
           <div className={users_classes.contacts}>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img} 
                    style={{backgroundColor:`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`}}  
                    src={`https://avatars.dicebear.com/api/bottts/Joseph.svg`} 
                    alt="user's avatar"/>
                    <h3>Joseph</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img  className={users_classes.contacts_avatar_img} 
                    style={{backgroundColor:`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`}} 
                    src={`https://avatars.dicebear.com/api/bottts/David.svg`} 
                    alt="user's avatar"/>
                    <h3>David</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img} 
                    style={{backgroundColor:`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`}} 
                    src={`https://avatars.dicebear.com/api/bottts/Kevin.svg`} 
                    alt="user's avatar"/>
                    <h3>Kevin</h3>
                </div>
           </div>
    )
}



export default Contacts