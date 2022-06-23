import { createTheme } from "@mui/material/styles"

export const themeOptions ={
    palette: {
        type: 'dark',
        mode: 'dark',
        primary:{
            main:'#281c4b',
        },
        secondary:{
            main: '#000000',
        },
        info: {
        main: '#f10065',
        },
        error: {
        main: '#e80c00',
        },
        success: {
        main: '#d9d9d9',
        },
        warning: {
        main: '#ed5b2d',
        },
    },
};

const theme=createTheme(themeOptions);
export default theme