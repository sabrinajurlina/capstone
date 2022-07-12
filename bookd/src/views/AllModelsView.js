import React from 'react';
import {useTheme} from '@mui/material/styles';
import AllModels from '../components/AllModels';
import NavBar from '../components/NavBar';

export default function AllModelsView(){
    const theme = useTheme()

    return(
        <>
        <NavBar></NavBar>
        <AllModels/>
        </>

    )
}