import { makeStyles } from "@material-ui/core"


const authStyles = makeStyles ((theme) => ({
    // Login and Sign up
    general:{
            backgroundColor:theme.palette.primary.dark,
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            color:'white'
    },     
    validation:{
        [theme.breakpoints.up('xs')]: {
            height:'500px',
            width:'350px'
        },
        [theme.breakpoints.up('sm')]: {
            height:'550px',
            width:'400px'
        },
        [theme.breakpoints.up('md')]: {
            height:'600px',
            width:'450px'
        },
        [theme.breakpoints.up('lg')]: {
            height:'650px',
            width:'500px'
        },
        [theme.breakpoints.up('xl')]: {
            height:'675px',
            width:'525px'
        },
        backgroundColor:theme.palette.primary.main,
        boxShadow:`0px 0px 50px 2px black`,
        color:'white',
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'center',
        borderRadius:'10px'
    },

    avatar:{
        [theme.breakpoints.up('xs')]: {
            height:'125px',
            width:'125px'
        },
        [theme.breakpoints.up('sm')]: {
            height:'150px',
            width:'150px'
        },
        [theme.breakpoints.up('md')]: {
            height:'175px',
            width:'175px'
        },
        [theme.breakpoints.up('lg')]: {
            height:'200px',
            width:'200px'
        },
        [theme.breakpoints.up('xl')]: {
            height:'225px',
            width:'225px'
            
        },
        marginBottom:'15px' 
    },
    discription:{
        marginTop:'15px',
        marginBottom:'15px'
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


export default authStyles