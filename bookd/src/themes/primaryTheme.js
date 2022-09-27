import { createTheme } from "@mui/material/styles"

export const themeOptions ={
    palette: {
        type: 'light',
        primary:{
            main:'#ffffff',
            dark: '#121212',
            //#282c34
            grey: '#b2b1b3',
        },
        secondary:{
            main: '#e4e3e6',
        },
        info: {
            main: '#f10065',
        },
        error: {
            main: '#e80c00',
        },
        success: {
            main: '#281c4b',
        },
        warning: {
            main: '#ed5b2d',
        },
        logo: {
            main: '#281c4b',
        }
    },
};

const theme=createTheme(themeOptions);
export default theme