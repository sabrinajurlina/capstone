import NavBar from '../components/NavBar';
import StatementTable from '../components/schedule/Statement';
import React from 'react';
// import {useTheme} from '@mui/material/styles';

export default function StatementView(){
    // const theme = useTheme()

    return(
        <>
        <NavBar></NavBar>
        <StatementTable></StatementTable>
        </>
    )
}
