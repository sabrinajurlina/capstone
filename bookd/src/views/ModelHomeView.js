import NavBar from '../components/NavBar';
import React, {useContext, useEffect} from 'react';
import Button from '../components/Button';
import {AppContext} from '../context/AppContext';
import AllJobs from '../components/AllJobs';
import AllClients from '../components/AllClients';
import StatementTable from '../components/schedule/Statement';
import Typography from '@mui/material/Typography';

export default function ModelHomeView(){
    const {user} = useContext(AppContext)
    
        
    
    return(
        <>
        <NavBar></NavBar>
        <AllJobs></AllJobs>
        {/* <AllClients></AllClients> */}
        <StatementTable></StatementTable>
        </>
    )
}