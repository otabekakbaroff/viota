import { createTheme } from "@material-ui/core";
export const theme = createTheme({
    palette:{
        primary:{
            light:'rgb(69 79 87)',
            main: '#2a2d35',
            dark: '#11181a'
        },
        secondary:{
            light: 'rgb(77 154 205)',
            main: 'rgb(48 116 161)',
            dark: 'rgb(0 104 173)'
        }
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 500,
          md: 800,
          lg: 1000,
          xl: 1200,
        },
    },
})