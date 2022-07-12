import React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';import SpeedDialAction from '@mui/material/SpeedDialAction';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from 'react-router-dom'

export default function ControlledOpenSpeedDial() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const actions = [
    { icon: <AddIcon onClick={()=>navigate('/job')}/>, name: 'Post a Job' },
    { icon: <EditIcon />, name: 'Edit a Job' },
    { icon: <DeleteIcon />, name: 'Delete a Job' },
  ];
  
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{ color:'black', position: 'absolute', bottom: 16, right: 16 }}
        icon={<UnfoldMoreIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
