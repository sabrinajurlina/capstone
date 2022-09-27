import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';
import EditClientForm from '../forms/EditClientForm';
import EditModelForm from '../forms/EditModelForm';
import {Paper, Typography} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import NavBar from '../components/NavBar';

export default function EditProfileView(){
    const theme = useTheme()
    const {user} = useContext(AppContext)
    return(
        <>
        <NavBar></NavBar>
            <Paper sx={{m:5, p:5,
                width: '60%',
                margin: 'auto',
                borderRadius: '16px',
                justifyContent:"center",
                backgroundColor: theme.palette.background.paper,
                backgroundImage: theme.palette.background.paper
                }}>
                <Typography variant="h5">Edit Profile</Typography>
                {user?.role === 'client' || user?.role === 'Client' || user?.role === 'CLIENT' ?   
                    <EditClientForm></EditClientForm>
                :
                    <EditModelForm></EditModelForm>
                }
            </Paper>
        </>
    )
}

{/* <MenuItem>
              <Typography textAlign="left">
                <MyButton onClick={handleClickOpenAlert} style={{textAlign:'left', textDecoration:'none', color:'red', fontSize:'smaller'}}>
                Delete Account
                </MyButton>
              </Typography>
              <Dialog
                open={openAlert}
                onClose={handleCloseAlert}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Confirm Account Deletion?"}
                </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Are you sure you want to delete your user account?
                      This action is permanent and cannot be undone.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <MyButton
                      sx={{textDecoration:'none', color:'red', fontSize:'small'}}
                      onClick={handleDelete}>
                      YES
                    </MyButton>
                    <MyButton
                      sx={{textDecoration:'none', color:'black', fontSize:'small'}}
                      onClick={handleCloseAlert}>
                      NO
                    </MyButton>
                  </DialogActions>
                </Dialog>
              </MenuItem> */}