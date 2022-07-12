import React from 'react'
import ClientRegisterForm from '../forms/ClientRegisterForm'
import {Paper, Typography} from '@mui/material'
import {useTheme} from '@mui/material/styles'

export default function ClientRegisterView(){
    const theme = useTheme()

    return(
        <>
            <Paper sx={{m:5, p:5, justifyContent:"center", backgroundColor: theme.palette.background.paper, backgroundImage: theme.palette.background.paper}}>
                <Typography variant="h5">Register</Typography>
                    <ClientRegisterForm></ClientRegisterForm>
            </Paper>
        </>
    )
}