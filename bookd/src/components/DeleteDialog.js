import * as React from 'react';
import MyButton from '../components/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useDeleteUser from '../hooks/useDeleteUser';

export default function DeleteDialog() {
    const [open, setOpen] = React.useState(false);
    const [deleteUser, setDeleteUser] = useState({})

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useDeleteUser(deleteUser);

    const handleDelete = () => {
        setDeleteUser(deleteUser)
    }


  return (
    <div>

    <MyButton variant="outlined" onClick={handleClickOpen}>
        Delete Profile
    </MyButton>

    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description">

    <DialogTitle id="alert-dialog-title">
        {"Confirm Account Deletion?"}
    </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete your user profile?
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
    </div>
  );
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