import React from 'react'
import LoginForm from '../forms/LoginForm'
import {Paper, Typography} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import {useNavigate} from 'react-router-dom'
import MyButton from '../components/Button'
import Box from '@mui/material/Box'
import bookd2 from '../bookd2.svg';


export default function ModelLoginView(){
    const theme = useTheme()
    const navigate = useNavigate()

    return(
        <>
        <Box sx={{backgroundColor: theme.palette.primary.dark, backgroundImage:theme.palette.primary.dark, display:"flex", height: '100vh', width:'100vw', alignItems: 'center', justifyContent: 'center'}}>
            <Paper
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height:'70vh', width:'40vw',
                    justifyContent:'center',
                    alignItems: 'center',
                    backgroundColor: theme.palette.secondary.main,
                    backgroundImage: theme.palette.secondary.main
                }}
            >
            <img src={bookd2} id='loginLogo' className="App-logo" alt="logo" onClick={()=>navigate('/')}/>

                <LoginForm></LoginForm>
                <MyButton
                    sx={{variant:'contained',
                        color: theme.palette.info.main,
                        borderColor: theme.palette.secondary.main,
                        backgroundColor: theme.palette.logo.main, backgroundImage: theme.palette.logo.main,
                        width:'70%',
                        mt:1,
                        mb:5,
                        borderRadius: '25px'
                    }}
                    onClick={()=>navigate('/modelRegister')}
                >{"Register"}
                </MyButton>
            </Paper>
        </Box>
        </>
    )
}