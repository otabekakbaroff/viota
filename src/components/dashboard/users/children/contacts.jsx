import usersStyles from "../usersStyles"

function Contacts(){
    const users_classes = usersStyles()
    return(
           <div className={users_classes.contacts}>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img}   
                    src={`https://avatars.dicebear.com/api/bottts/Joseph.svg`} 
                    alt="user's avatar"/>
                    <h3 className={users_classes.contacts_avatar_username}>Joseph</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img  className={users_classes.contacts_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/David.svg`} 
                    alt="user's avatar"/>
                    <h3 className={users_classes.contacts_avatar_username}>David</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/Kevin.svg`} 
                    alt="user's avatar"/>
                    <h3 className={users_classes.contacts_avatar_username}>Kevin</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/Mike.svg`} 
                    alt="user's avatar"/>
                    <h3 className={users_classes.contacts_avatar_username}>Mike</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/Jakie.svg`} 
                    alt="user's avatar"/>
                    <h3 className={users_classes.contacts_avatar_username}>Jakie</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/Benzon.svg`} 
                    alt="user's avatar"/>
                    <h3 className={users_classes.contacts_avatar_username}>Benzon</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/Karel.svg`} 
                    alt="user's avatar"/>
                    <h3 className={users_classes.contacts_avatar_username}>Karel</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/Vlad.svg`} 
                    alt="user's avatar"/>
                    <h3 className={users_classes.contacts_avatar_username}>Kevin</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/Kariba.svg`} 
                    alt="user's avatar"/>
                    <h3 className={users_classes.contacts_avatar_username}>Kevin</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/Joe.svg`} 
                    alt="user's avatar"/>
                    <h3 className={users_classes.contacts_avatar_username}>Joe</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/Kailie.svg`} 
                    alt="user's avatar"/>
                    <h3 className={users_classes.contacts_avatar_username}>Kailie</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/Tao.svg`} 
                    alt="user's avatar"/>
                    <h3 className={users_classes.contacts_avatar_username}>Tao</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/Roger.svg`} 
                    alt="user's avatar"/>
                    <h3 className={users_classes.contacts_avatar_username}>Roger</h3>
                </div>
                <div className={users_classes.contacts_avatar}>
                    <img className={users_classes.contacts_avatar_img}  
                    src={`https://avatars.dicebear.com/api/bottts/Gendalf.svg`} 
                    alt="user's avatar"/>
                    <h3 className={users_classes.contacts_avatar_username}>Gendalf</h3>
                </div>
           </div>
    )
}



export default Contacts