import React from 'react'
import JobPostForm from '../forms/JobPostForm'
import {Paper, Typography} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import NavBar from '../components/NavBar';

export default function JobPostView(){
    const theme = useTheme()

    return(
        <>
        <NavBar/>
            <Paper sx={{m:5, p:5, justifyContent:"center", backgroundColor: theme.palette.background.paper, backgroundImage: theme.palette.background.paper}}>
                <Typography variant="h5">Create a new Job Posting</Typography>
                    <JobPostForm></JobPostForm>
            </Paper>
        </>
    )
}