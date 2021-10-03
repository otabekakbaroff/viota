import { makeStyles } from "@material-ui/core"


const usersStyles = makeStyles ((theme) => ({
    main:{
        backgroundColor:theme.palette.primary.main,
        width:'35%',
        borderRight:`solid ${theme.palette.primary.dark} 1.5px`
    },

    // Profile

    profile:{
        height:'12%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    profile_leftContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        width:'60%',
        justifyContent: 'flex-start'
    },
    profile_img:{
        height:'75px',
        width:'75px',
        // backgroundColor: theme.palette.secondary.main,
        borderRadius:'50px',
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
        height:'7%',
        '&::placeholder':{
            color:'rgb(150,150,150)',
            paddingLeft:'5px'
        },
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        width:'100%',
        borderTop:`solid 1px ${theme.palette.primary.light}`,
        borderBottom :`solid 1px ${theme.palette.primary.light}`
    },

    search_input:{
        backgroundColor: 'inherit',
        height:'100%',
        width:'100%',
        outline:'none',
        color:'white'
    },

    // Contacts 

    contacts:{
        height:'80%'
    },
    contacts_avatar:{
        display:'flex',
        alignItems:'center'
    },
    contacts_avatar_img:{
        width:'100px',
        height:'100px',
        borderRadius:'50px'
    }
}))





export default usersStyles