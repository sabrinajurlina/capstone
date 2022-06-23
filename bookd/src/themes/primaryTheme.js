import { createTheme } from "@mui/material/styles"

export const themeOptions ={
    palette: {
        type: 'light',
        primary:{
            main:'#ffffff',
        },
        secondary:{
            main: '#d9d9d9',
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
    },
};

const theme=createTheme(themeOptions);
export default theme