import { makeStyles } from "@material-ui/core"


const usersStyles = makeStyles ((theme) => ({
    main:{
        [theme.breakpoints.up('xs')]: {
            width:'100px',
        },
        [theme.breakpoints.up('md')]: {
            width:'500px',
        },
        backgroundColor:theme.palette.primary.main,
        borderRight:`solid ${theme.palette.primary.dark} 1.5px`,
        display:'flex',
        flexDirection:'column'
    },

    // Profile

    profile:{
        [theme.breakpoints.down('sm')]: {
            height:'350px'
        },
        height:'115px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    profile_leftContainer:{
        [theme.breakpoints.down('sm')]: {
            display:'flex',
            flexDirection:'column',
            margin:0,
            width:'100%',
        },
        display:'flex',
        alignItems:'center',
        width:'60%',
        justifyContent: 'flex-start',
        marginLeft:'15px'
    },
    profile_img:{
        [theme.breakpoints.down('sm')]: {
            margin:0,
            padding:0
        },
        height:'100px',
        width:'100px',
        padding:'5px',
        margin:'5px'
    },
    profile_username:{
        [theme.breakpoints.down('sm')]: {
            fontSize:'18px',
            textAlign:'center'
        },
        textAlign:'left'
    },
    profile_actions:{
        [theme.breakpoints.down('sm')]: {
            display:'none',
        },
        width:'40%',
        display:'flex',
        justifyContent: 'flex-end'
    },
    profile_modal_notifications:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        overflow:"scroll",
        height:'90%',
        // color:'red',
        margin:'15px 0px'
    },
    profile_modal_notifications_userBox:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
        margin:'15px 0px 15px 0px'
    },
    profile_modal_notifications_profile:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    profile_modal_notifications_img:{
        width: '75px',
        height:'75px'
    },
    profile_modal_notifications_accept_button:{
        backgroundColor:'#0068ad',
        marginRight:'10px'
    },
    profile_modal_notifications_decline_button:{
        backgroundColor:'#fd2b2b',
    },

   
    // Search

    search:{
        [theme.breakpoints.down('md')]: {
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            backgroundColor:theme.palette.primary.main,
            borderTop:`solid 1px ${theme.palette.primary.light}`,
            borderBottom :`solid 1px ${theme.palette.primary.light}`,
            alignItems:'center'
        },
        display:'flex',
        backgroundColor:theme.palette.primary.main,
        justifyContent:'center',
        borderTop:`solid 1px ${theme.palette.primary.light}`,
        borderBottom :`solid 1px ${theme.palette.primary.light}`,
        alignItems:'center',
        padding:'15px 5px'
    },

    search_textField:{
        [theme.breakpoints.up('xs')]: {
            display:'none'
        },
        [theme.breakpoints.up('md')]: {
            display:'flex',
        },
        backgroundColor: theme.palette.primary.light,
        color: 'white',
        height:'75px',
        width:'97%',
        borderRadius:'10px',
        borderTop:`solid 1px ${theme.palette.primary.light}`,
        borderBottom :`solid 1px ${theme.palette.primary.light}`,
        alignItems:'center'
    },

    search_input:{
        outline:'none',
        '&::placeholder':{
            color:'rgb(150,150,150)',
            fontSize:'24px',
            fontWeight:'50px',
            paddingLeft:'5px'
        },
        backgroundColor: theme.palette.primary.light,
        borderRadius:'10px',
        height:'70px',
        width:'97%',
        color:'white',
        fontSize:'24px',
        paddingLeft:'5px',
        display:'flex',
        alignItems:'center',
        '&:hover':{
            backgroundColor:'#3a3f42'
        },
        margin: '15px 0px 15px 0px',
    },
    search_icon_desktop:{
        padding:'5px',
        color:'white',
        width: '35px',
        height:'35px',
    },
    search_icon_mobile:{
        [theme.breakpoints.up('xs')]: {
            color:'white',
            width: '35px',
            height:'35px',
            backgroundColor: theme.palette.primary.light,
            padding:'1px 25px',
            margin:'10px 10px',
            borderRadius:'5px',
            '&:active':{
                backgroundColor:'#3f4448'
            },
        },
        [theme.breakpoints.up('md')]: {
            display:'none',
        },
    },



    // Contacts 

    contacts:{
        flexGrow:'1',
        overflow:'scroll'
    },

    contacts_avatar:{
        display:'flex',
        alignItems:'center',
        borderBottom:'solid 1px #31363a',
        justifyContent:'space-around', 
        height:'100px'
    },

    contacts_avatar_img:{
        width:'75px',
        height:'75px',
        borderRadius:'50px',
        marginRight:'15px',
        marginLeft:'15px'
    },
    
    contacts_avatar_username:{
        [theme.breakpoints.up('xs')]: {
            display:'none'
        },
        [theme.breakpoints.up('md')]: {
            display:'block'
        }
    },
    contacts_add_friend_button:{
        backgroundColor:'#0068ad',
    }
}))





export default usersStyles