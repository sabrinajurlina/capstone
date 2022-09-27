import React from 'react';
import ModelRegisterForm from '../forms/ModelRegisterForm';
import {Paper, Typography} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import logoTitle from '../logoTitle.svg';
import icon from '../icon.svg';
import {useNavigate} from 'react-router-dom';
import MyButton from '../components/Button';


export default function ModelRegisterView(){
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
                    src={icon}
                    alt="icon"
                    style={{width: '15%', height:'15%', position: 'absolute', top: '5%', left: '7%'}}
                    onClick={()=>{navigate('/')}}
                />
            </div>
            <MyButton
                    sx={{
                        variant:'outlined',
                        // backgroundColor:theme.palette.primary.grey,
                        color: theme.palette.info.main,
                        borderColor: theme.palette.secondary.main,
                        width:'10%', borderRadius:'25px',
                        position: 'absolute', top: '5%', right: '8%'
                    }}
                    onClick={()=>navigate('/modelLogin')}>{"Login"}
            </MyButton>
            <Paper
                sx={{
                    pt: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    width:'40vw',
                    justifyContent:'center',
                    alignItems: 'center',
                    backgroundColor: theme.palette.secondary.main,
                    backgroundImage: theme.palette.secondary.main
                }}>
            
                <Typography variant="h5">Model Register Form</Typography>
                    <ModelRegisterForm></ModelRegisterForm>
            </Paper>
        </Box>
        </>
    )
}