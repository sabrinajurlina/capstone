import React, {useState} from 'react';
import logo from '../logo.svg';
import MyButton from '../components/Button';
import {Paper, Typography} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import {useNavigate} from 'react-router-dom';

export default function LandingPage(){
    const theme = useTheme();
    const navigate = useNavigate();
    // const [isHover, setIsHover] = useState(false);

    // const handleMouseOver = () => {
    //     setIsHover(true);
    // };
    // const handleMouseOut = () => {
    //     setIsHover(false);
    // };

    return (
    <>
        <Box sx={{display:"flex", minheight:'100vh'}}>
            <Paper sx={{width:'100vw', justifyContent:"center", backgroundColor: theme.palette.primary.dark, backgroundImage: theme.palette.primary.dark}}>
                <div display="flex">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <Typography sx={{pt:4, pb:2, justifyContent:"center", color:'white'}} variant="h6">Who's visiting?</Typography>
                        <Box sx={{display:'inline-flex', justifyContent:'space-between', width:'30vw'}}>
                            <MyButton
                                sx={{
                                    // onMouseEnter:{handleMouseOver},
                                    // onMouseLeave:{handleMouseOut},
                                    // borderColor: isHover ? theme.palette.primary.dark : theme.palette.primary.grey,
                                    // backgroundColor: isHover ? theme.palette.primary.grey : theme.palette.primary.dark,
                                    // color: isHover === 'true' ? theme.palette.logo.main : theme.palette.info.main,
                                    borderColor: theme.palette.primary.dark,
                                    backgroundColor: theme.palette.primary.dark,
                                    color: theme.palette.info.main,
                                    width:'45%', justifyContent:'center', borderRadius:'25px'
                                }}
                                onClick={()=>navigate('/modelLogin')}>{"Model"}
                            </MyButton>
                            <MyButton
                                sx={{
                                    // onMouseEnter:{handleMouseOver},
                                    // onMouseLeave:{handleMouseOut},
                                    // borderColor: isHover ? theme.palette.primary.dark : theme.palette.primary.grey,
                                    // backgroundColor: isHover ? theme.palette.primary.grey : theme.palette.primary.dark,
                                    // color: isHover === 'true' ? theme.palette.logo.main : theme.palette.info.main,
                                    borderColor: theme.palette.primary.dark,
                                    backgroundColor: theme.palette.primary.dark,
                                    color: theme.palette.info.main,
                                    width:'45%', justifyContent:'center', borderRadius:'25px'
                                }}
                                onClick={()=>navigate('/clientLogin')}>{"Client"}
                            </MyButton>
                        </Box>
                    </header>
                </div>
            </Paper>
        </Box>
    </>
    )
}
