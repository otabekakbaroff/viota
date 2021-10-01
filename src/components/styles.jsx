import { makeStyles } from "@material-ui/core"


const useStyles = makeStyles ((theme) => ({
    general:{
        backgroundColor:theme.palette.primary.dark,
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    // Login and Sign up

    validation:{
        [theme.breakpoints.down('xs')]: {
            height:'475px',
            width:'300px',
        },
        [theme.breakpoints.down('sm')]: {
            height:'560px',
            width:'375px'
        },
        backgroundColor:theme.palette.primary.main,
        boxShadow:`0px 0px 50px 2px black`,
        color:'white',
        display:'flex',
        alignItems:'center',
        height:'650px',
        width:'425px',
        flexDirection:'column',
        justifyContent:'center',
        borderRadius:'10px'
    },

    avatar:{
        [theme.breakpoints.down('xs')]: {
            height:'150px',
            width:'150px',
            marginBottom:'15px'
        },
        [theme.breakpoints.down('sm')]: {
            height:'175px',
            width:'175px',
            marginBottom:'15px'
        },
        width:'200px',
        height:'200px'
        
    },

    form:{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        alignItems:'center',
    },

    item:{
        [theme.breakpoints.down('xs')]: {
            marginBottom:'10px'
        },
        '&::placeholder':{
            color:'rgb(150,150,150)',
        },
        padding: '15px 0px 15px 5px',
        backgroundColor:theme.palette.primary.light,
        color:'white',
        margin:theme.spacing(1),
        width:'70%',
        borderRadius:'6px',
        outline:'none'
    },

    button:{
        '&:hover':{
            backgroundColor:theme.palette.secondary.main
        },
        color:"white" ,
        width:'70%',
        margin:theme.spacing(3),
        background:theme.palette.secondary.dark
    }
    // End of login and sign up page
}))


export default useStyles