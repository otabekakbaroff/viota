import { makeStyles } from "@material-ui/core"


const msgStyles = makeStyles ((theme) => ({
    main:{
        backgroundColor:theme.palette.primary.dark,
        width:'65%',
        display:'flex',
        flexDirection:'column'
    },
    header:{
        display:'flex',
        height: '150px',
        borderBottom:`solid 1.5px ${theme.palette.primary.light}`,
        backgroundColor:'rgb(34 34 40)',
        justifyContent:'space-between',
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



    chatBox:{
        flexGrow:'1',
        overflow:'scroll',
        borderBottom:`solid 2px ${theme.palette.primary.light}`,
        display:'flex',
        flexDirection:'column',
        padding:'20px 0px 20px 0px'
    },
    chatBox_sent:{
        backgroundColor:'#0f59ff',
        borderRadius:'25px',
        maxWidth:'500px',
        alignSelf:'end',
        fontSize:'17px',
        color:'white',
        padding:'5px 25px',
        wordWrap: 'break-word',
        margin:'0px 10px 0px 0px'

    },
    chatBox_received:{
        backgroundColor:'#444444',
        borderRadius:'25px',
        maxWidth:'500px',
        fontSize:'17px',  
        color:'white',
        padding:'5px 25px',
        alignSelf:'start',
        wordWrap: 'break-word',
        margin:'0px 0px 0px 10px'
    },







    sendBox:{
        // height:'fit-content',
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
        color:'#5d6164'
    }



}))





export default msgStyles


