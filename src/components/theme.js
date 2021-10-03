import { createTheme } from "@material-ui/core";
export const theme = createTheme({
    palette:{
        primary:{
            light:'#31363a',
            main: '#20262a',
            dark: '#151a20'
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
          sm: 600,
          md: 950,
          lg: 1275,
          xl: 1400,
        },
    },
})