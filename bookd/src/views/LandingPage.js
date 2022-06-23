import React from 'react';
import logo from '../logo.svg';
import Button from '../components/Button';
import {Paper, Typography} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import {useNavigate} from 'react-router-dom';

export default function LandingPage(){
    const theme = useTheme();
    const navigate = useNavigate();

    return (
    <>
        <Box sx={{display:"flex", minheight:'100vh'}}>
            <Paper sx={{width:'100vw', justifyContent:"center", backgroundColor: theme.palette.background.paper, backgroundImage: theme.palette.background.paper}}>
                <div display="flex">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <Typography sx={{pt:4, pb:2, justifyContent:"center", color:'white'}} variant="h6">Who's visiting?</Typography>
                        <Box sx={{display:'inline-flex', justifyContent:'space-between', width:'30vw'}}>
                            <Button sx={{color: "#f10065", mt:2, pl:0, pr:0, width:'45%', justifyContent:'center'}} onClick={()=>navigate('/modelLogin')}>Model</Button>
                            <Button sx={{color: "#f10065", mt:2, pl:0, pr:0, width:'45%', justifyContent:'center'}} onClick={()=>navigate('/clientLogin')}>Client</Button>
                        </Box>
                    </header>
                </div>
            </Paper>
        </Box>
    </>
    )
}
