import { makeStyles } from "@material-ui/core"


const usersStyles = makeStyles ((theme) => ({
    main:{
        [theme.breakpoints.up('xs')]: {
            display:'flex',
            flexDirection:'column',
            backgroundColor:theme.palette.primary.main,
            borderRight:`solid ${theme.palette.primary.dark} 1.5px`,
            height:'100vh',
            width:'100%',
            overflow:'hidden'
        },
        [theme.breakpoints.up('md')]: {
            width:'250px',
        },
        [theme.breakpoints.up('lg')]: {
            width:'400px',
        },
        [theme.breakpoints.up('xl')]: {
            width:'500px',
        },
    },

    // Profile

    profile:{
        [theme.breakpoints.up('xs')]: {
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            height: '165px',
            padding: '5px',
        },
    },
    profile_leftContainer:{
        [theme.breakpoints.up('xs')]: {
            display:'flex',
            alignItems:'flex-start',
            justifyContent:'flex-start',
            flexDirection:'column',
            margin:0,
            width:'100px',
        },
    },
    profile_img:{
        [theme.breakpoints.up('xs')]: {
            height:'100px',
            width:'100px',
            margin:'5px',
            padding: 0
        },
    },
    profile_username:{
        [theme.breakpoints.up('xs')]: {
            fontSize:'18px',
            textAlign:'center',
            width:'100%'
        },
    },
    profile_actions:{
        [theme.breakpoints.up('xs')]: {
            width:'100%',
            display:'flex',
            justifyContent: 'flex-end',
            '& .MuiSvgIcon-root':{
                fontSize: '30px'
            },
        },
        [theme.breakpoints.up('md')]: {
            flexWrap:'wrap'
        },
    },
    profile_modal_notifications_item:{
        [theme.breakpoints.up('xs')]: {
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            overflow:"scroll",
            height:'90%',
            width:'300px',
            margin:'15px 0px',
            backgroundColor:'red'
        }
    },
    profile_modal_notifications_closeButton:{
        [theme.breakpoints.up('xs')]: {
            float:'right'
        }
    },
    profile_modal_notifications_userBox:{
        [theme.breakpoints.up('xs')]: {
            display:'flex',
            flexDirection:'column',
            backgroundColor:'#3737376e',
            width:'95%',
            height:'150px',
            margin:'15px 0px 15px 0px',
            padding:'15px',
            borderRadius:'15px'
        }
    },
    profile_modal_notifications_profile:{
        [theme.breakpoints.up('xs')]: {
            display:'flex',
            alignItems:'center',
        }
    },
    profile_modal_notifications_img:{
        [theme.breakpoints.up('xs')]: {
            width: '75px',
            height:'75px',
            marginRight:'15px'
        }
    },
    profile_modal_notifications_buttons:{
        [theme.breakpoints.up('xs')]: {
            display:'flex',
            justifyContent:'flex-end',
            alignItems:'center',
            height:'50%',
        }
    },
    profile_modal_notifications_accept_button:{
        backgroundColor:'#0068ad',
        marginRight:'10px'
    },
    profile_modal_notifications_decline_button:{
        backgroundColor:'#fd2b2b',
    },
    profile_modal_notifications_badge:{
        '& .MuiBadge-badge':{
            backgroundColor:'rgb(0 104 173)'
        },
    },

    // Search

    search:{
        [theme.breakpoints.up('xs')]: {
            display:'flex',
            justifyContent:'flex-end',
            position:'relative',
            flexDirection:'row',
            backgroundColor:theme.palette.primary.main,
            borderTop:`solid 1px ${theme.palette.primary.light}`,
            borderBottom :`solid 1px ${theme.palette.primary.light}`,
            alignItems:'center',
            padding:'15px 5px'
        }
    },

    search_input:{
        [theme.breakpoints.up('xs')]: {
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
        [theme.breakpoints.up('md')]: {
            '&::placeholder':{
                color:'rgb(150,150,150)',
                fontSize:'20px',
                fontWeight:'50px',
                paddingLeft:'5px'
            },
        }
    },
    search_icon_desktop:{
        [theme.breakpoints.up('xs')]: {
            position:'absolute',
            padding:'5px',
            color:'white',
            width: '35px',
            height:'35px',
        },
        [theme.breakpoints.up('md')]: {
            width: '30px',
            height:'30px',
        }
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

    contacts_profile:{
        display:'flex',
        borderBottom:'solid 1px #31363a',
        justifyContent:'space-between', 
        height:'100px'
    },
    contacts_profile_avatar:{
        display:'flex',
        alignItems:'center',
        margin:'0px 20px'
    },
    contacts_profile_img:{
        width:'75px',
        height:'75px',
        borderRadius:'50px',
        marginRight:'15px',
        marginLeft:'15px'
    },
    
    contacts_profile_username:{
        // [theme.breakpoints.up('xs')]: {
        //     display:'none'
        // },
    },
    contacts_add_friend_button:{
        height: '50px',
        backgroundColor:'#0068ad',
        alignSelf:'center',
        margin:'0px 25px'
    }
}))





export default usersStyles