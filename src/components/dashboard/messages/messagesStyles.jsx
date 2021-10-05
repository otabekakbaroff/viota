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
        flexDirection:'column'
    },
    chatBox_sent:{
        backgroundColor:'red',
        borderRadius:'50px',
        width:'150px',
        alignSelf:'end'
    },
    chatBox_received:{
        backgroundColor:'blue',
        borderRadius:'50px',
        width:'150px'
    },


    sendBox:{
        height:'120px',
        display:'flex',
        alignItems:'center',
        backgroundColor:'rgb(49 54 60)'
    },

    sendBox_input:{
        backgroundColor:'white',
        borderRadius:'10px',
        height: '75%',
    }

}))





export default msgStyles


