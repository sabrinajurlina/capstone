import React, {useState, createContext} from 'react';
import {ThemeProvider} from '@mui/material/styles';
import getTheme from '../themes/base';

//create context
export const ThemeContext = createContext({
    currentTheme: 'primaryTheme',
    setTheme: null
})

//make a provider
const CustomThemeProvider = ({children})=>{
    const currentTheme = localStorage.getItem('appTheme') || 'primaryTheme'
    const [themeName, _setThemeName] = useState(currentTheme)
    const theme = getTheme(themeName)

    const setThemeName=(name) =>{
        localStorage.setItem('appTheme', name)
        _setThemeName(name)
    }

    const values = {
        currentTheme:themeName,
        setTheme:setThemeName //stores and updates theme in state
    }

    return(
        //equal to the dictionary of values we just created above
        <ThemeContext.Provider value={values}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default CustomThemeProvider