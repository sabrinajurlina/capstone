import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup'
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {useContext}from 'react'
import {AppContext} from '../../context/AppContext';



export default function AddRemoveJob({job}) {
  const {addToSchedule, removeFromSchedule, clearSchedule}=useContext(AppContext)
  const {user}=useContext(AppContext)
  
  return (
    <>
        <ButtonGroup sx={{margin:"auto"}}>
          <IconButton key="add" onClick={()=>{addToSchedule(job)}}>
              <AddCircleIcon fontSize="small">Add To Schedule</AddCircleIcon>
          </IconButton>
          <IconButton key="remove" onClick={()=>{removeFromSchedule(job)}}>
              <RemoveCircleIcon fontSize="small">Remove From Schedule</RemoveCircleIcon>
          </IconButton>
          <IconButton key="clear" onClick={()=>{clearSchedule(job)}}>
              <DeleteForeverIcon fontSize="small">Clear Schedule</DeleteForeverIcon>
          </IconButton>
        </ButtonGroup>
    </>
  )
}

