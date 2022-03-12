import { makeStyles } from "@material-ui/core"


const msgStyles = makeStyles ((theme) => ({
    main:{
        [theme.breakpoints.up('xs')]: {
            backgroundColor:theme.palette.primary.dark,
            display: 'none',
            flexDirection:'column',
            width:'100%',
            flexGrow:1,
        },
        [theme.breakpoints.up('md')]: {
            display:'flex',
            width:'65%',
        }
    },
    header:{
        position:'sticky',
        top:0,
        display:'inline-flex',
        height: '150px',
        borderBottom:`solid 1.5px ${theme.palette.primary.light}`,
        backgroundColor:'rgb(34 34 40)',
        // justifyContent:'space-evenly',
        alignItems:'center'
    },
    header_avatar:{
        display:'flex',
        alignItems:'center'
    },

    header_avatar_img:{
        height:'75px',
        width:'75px'
    },
    header_icons:{
        display:'flex',
        width:'100%',
        justifyContent:'flex-end'
    },



    chatBox:{
        flexGrow:'1',
        overflow:'scroll',
        borderBottom:`solid 2px ${theme.palette.primary.light}`,
        display:'flex',
        flexDirection:'column',
        padding:'20px 0px 20px 0px'
    },
    chatBox_sent:{
        [theme.breakpoints.up('xs')]: {
            backgroundColor:'#0f59ff',
            borderRadius:'25px',
            alignSelf:'flex-end',
            fontSize:'17px',
            color:'white',
            padding:'5px 25px',
            wordWrap: 'break-word',
            margin:'7.5px 10px 7.5px 0px',
            maxWidth:'200px',
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth:'250px',
        },
        [theme.breakpoints.up('md')]: {
            maxWidth:'300px',
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth:'400px',
        },
        [theme.breakpoints.up('xl')]: {
            maxWidth:'600px',
        },
    },
    chatBox_received:{
        [theme.breakpoints.up('xs')]: {
            maxWidth:'200px',
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth:'250px',
        },
        [theme.breakpoints.up('md')]: {
            maxWidth:'300px',
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth:'400px',
        },
        [theme.breakpoints.up('xl')]: {
            maxWidth:'500px',
        },
        backgroundColor:'#444444',
        borderRadius:'25px',
        fontSize:'17px',  
        color:'white',
        padding:'5px 25px',
        alignSelf:'flex-start',
        wordWrap: 'break-word',
        margin:'7.5px 0px 7.5px 10px'
    },

    sendBox:{
        position:'sticky',
        bottom:0,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgb(49 54 60)'
    },

    sendBox_input:{
        backgroundColor:'white',
        borderRadius:'10px',
        margin: '15px 0px 15px 0px',
        height: '60px',
        '&:hover':{
            backgroundColor:'#f1f1f1',
        }
    },
    sendBox_input_icons:{
        [theme.breakpoints.up('xs')]: {
            color:'#5d6164',
            display:'none'
        },
        [theme.breakpoints.up('md')]: {
          display:'flex'  
        }
    }



}))





export default msgStyles


