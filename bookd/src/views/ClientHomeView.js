import NavBar from '../components/NavBar';
import React from 'react';
//, useEffect, {useContext}
// import MyButton from '../components/Button';
// import {AppContext} from '../context/AppContext';
import AllModels from '../components/AllModels';
// import StatementTable from '../components/schedule/Statement';
// import Typography from '@mui/material/Typography';
import SpeedDial from '../components/SpeedDial';

export default function ClientHomeView(){
    // const {user} = useContext(AppContext)        
    
    return(
        <>
        <NavBar></NavBar>
        <AllModels></AllModels>
        <SpeedDial></SpeedDial>

        

        </>
    )
}