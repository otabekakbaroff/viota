import usersStyles from "../usersStyles"

function Contacts(){
    const users_classes = usersStyles()
    return(
           <div className={users_classes.contacts}>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img}   
                    src={`https://avatars.dicebear.com/api/bottts/Joseph.svg`} 
                    alt="user's avatar"/>
                    <h3>Joseph</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img  className={users_classes.contacts_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/David.svg`} 
                    alt="user's avatar"/>
                    <h3>David</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/Kevin.svg`} 
                    alt="user's avatar"/>
                    <h3>Kevin</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/Mike.svg`} 
                    alt="user's avatar"/>
                    <h3>Mike</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/Jakie.svg`} 
                    alt="user's avatar"/>
                    <h3>Jakie</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/Benzon.svg`} 
                    alt="user's avatar"/>
                    <h3>Benzon</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/Karel.svg`} 
                    alt="user's avatar"/>
                    <h3>Karel</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/Vlad.svg`} 
                    alt="user's avatar"/>
                    <h3>Kevin</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/Kariba.svg`} 
                    alt="user's avatar"/>
                    <h3>Kevin</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/Joe.svg`} 
                    alt="user's avatar"/>
                    <h3>Joe</h3>
                </div>
           </div>
    )
}



export default Contacts