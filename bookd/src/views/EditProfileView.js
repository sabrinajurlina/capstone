import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';
import EditClientForm from '../forms/EditClientForm';
import EditModelForm from '../forms/EditModelForm';
import {Paper, Typography} from '@mui/material';
import {useTheme} from '@mui/material/styles';

export default function EditProfileView(){
    const theme = useTheme()
    const {user} = useContext(AppContext)
    return(
        <>
            <Paper sx={{m:5, p:5, justifyContent:"center", backgroundColor: theme.palette.background.paper, backgroundImage: theme.palette.background.paper}}>
                <Typography variant="h5">Edit Profile</Typography>
                {user?.role === 'client'?   
                    <EditClientForm></EditClientForm>
                :
                    <EditModelForm></EditModelForm>
                }
            </Paper>
        </>
    )
}