import React from 'react'
// import {useTheme} from '@mui/material/styles';
import AllJobs from '../components/AllJobs';
import NavBar from '../components/NavBar';

export default function AllJobsView(){
    // const theme = useTheme();

    return (
        <>
        <NavBar/>
        <AllJobs/>
        </>
    )
}