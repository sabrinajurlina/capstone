import React from 'react'
import ModelRegisterForm from '../forms/ModelRegisterForm'
import {Paper, Typography} from '@mui/material'
import {useTheme} from '@mui/material/styles'

export default function ModelRegisterView(){
    const theme = useTheme()

    return(
        <>
            <Paper sx={{m:5, p:5, justifyContent:"center", backgroundColor: theme.palette.background.paper, backgroundImage: theme.palette.background.paper}}>
                <Typography variant="h5">Register</Typography>
                    <ModelRegisterForm></ModelRegisterForm>
            </Paper>
        </>
    )
}