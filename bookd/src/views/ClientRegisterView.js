import React from 'react'
import ClientRegisterForm from '../forms/ClientRegisterForm'
import {Paper, Typography} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import Box from '@mui/material/Box';
import {useNavigate} from 'react-router-dom';
import logoTitle from '../logoTitle.svg';
import MyButton from '../components/Button';


export default function ClientRegisterView(){
    const theme = useTheme()
    const navigate = useNavigate()

    return(
        <>
        <Box sx={{
            backgroundColor: theme.palette.primary.dark,
            backgroundImage:theme.palette.primary.dark,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            minHeight: '100%',
            margin: '0px',
            paddingTop: 5,
            paddingBottom: 5,
            display:"flex", alignItems: 'center', justifyContent: 'center'
            }}
        >
        <div>
            <img
                src={logoTitle}
                alt="logo"
                style={{width: '35%', height:'35%', position: 'absolute', top: '5%', left: '0'}}
                onClick={()=>{navigate('/')}}
            />
        </div>
            <MyButton
                    sx={{backgroundColor:theme.palette.primary.grey,
                        color: theme.palette.logo.main,
                        width:'10%', borderRadius:'25px',
                        position: 'absolute', top: '5%', right: '5%'
                    }}
                    onClick={()=>navigate('/clientLogin')}>{"Login"}
            </MyButton>
            <Paper
                sx={{
                    pt: 5, ml:10,
                    display: 'flex',
                    flexDirection: 'column',
                    width:'40vw',
                    justifyContent:'center',
                    alignItems: 'center',
                    backgroundColor: theme.palette.secondary.main,
                    backgroundImage: theme.palette.secondary.main
                }}>
            
                <Typography variant="h5">Client Register Form</Typography>
                <ClientRegisterForm></ClientRegisterForm>
                
            </Paper>
        </Box>
        </>
    )
}