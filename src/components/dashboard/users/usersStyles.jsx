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
        height:'115px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    profile_leftContainer:{
        display:'flex',
        alignItems:'center',
        width:'60%',
        justifyContent: 'flex-start',
        marginLeft:'15px'
    },
    profile_img:{
        height:'100px',
        width:'100px',
        padding:'5px',
        margin:'5px'
    },
    profile_actions:{
        width:'40%',
        display:'flex',
        justifyContent: 'flex-end'
    },



    // Search

    search:{
        '&::placeholder':{
            color:'rgb(150,150,150)',
            paddingLeft:'5px'
        },
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        width:'100%',
        borderTop:`solid 1px ${theme.palette.primary.light}`,
        borderBottom :`solid 1px ${theme.palette.primary.light}`,
        display:'flex',
        alignItems:'center'
    },

    search_input:{
        backgroundColor: theme.palette.primary.light,
        borderRadius:'10px',
        height:'70px',
        width:'97%',
        color:'white',
        fontSize:'16px',
        display:'flex',
        alignItems:'center',
        margin: '15px 0px 15px 0px',
        '& .MuiInputBase-input':{
            fontSize: 18,
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
        [theme.breakpoints.up('sm')]: {
            display:'none'
        },
        [theme.breakpoints.up('md')]: {
            display:'block'
        }
    }
}))





export default usersStyles