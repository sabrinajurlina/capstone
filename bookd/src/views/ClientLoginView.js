import React from 'react'
import LoginForm from '../forms/LoginForm'
import {Paper, Typography} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import {useNavigate} from 'react-router-dom'
import Button from '../components/Button'
import Box from '@mui/material/Box'

export default function ClientLoginView(){
    const theme = useTheme()
    const navigate = useNavigate()

    return(
        <>
        <Box sx={{display:"flex", width:'100vw', mr:5, pr:5, mt:10, ml:5, pl:5, pt:10, alignItems: 'center', justifyContent: 'center'}}>
            <Paper sx={{height:'50vh', width:'50vw', pt:5, pl:5, ml:5, mr:5, pr:5, alignItems:"center", justifyContent:'center', backgroundColor: theme.palette.background.paper, backgroundImage: theme.palette.background.paper}}>
                <Typography variant="h4">Login</Typography>
                    <LoginForm></LoginForm>
                    <br></br>
                <Typography variant="h6" justifyContent='center' alignItems='center'>Don't have an account?</Typography>
                    <Button sx={{color: "#f10065", mt:2, width:'10%', justifyContent:'center',  alignItems:'center'}} onClick={()=>navigate('/clientRegister')}>Register</Button>
            </Paper>
        </Box>
        </>
    )
}