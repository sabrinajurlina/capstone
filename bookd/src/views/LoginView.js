import React from 'react'
import LoginForm from '../forms/LoginForm'
import {Paper, Typography} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import Box from '@mui/material/Box'

export default function LoginView(){
    const theme = useTheme()

    return(
        <>
        <Box sx={{display:"flex", width:'100%', justifyContent:'center', alignItems:'center'}}>
            <Paper sx={{m:5, p:5, justifyContent:"center", alignItems:'center', backgroundColor: theme.palette.background.paper, backgroundImage: theme.palette.background.paper}}>
                <Typography variant="h4">Login</Typography>
                    <LoginForm></LoginForm>
            </Paper>
        </Box>
        </>
    )
}