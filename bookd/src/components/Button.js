import React from 'react'
import MUIButton from '@mui/material/Button';

export default function Button({children, variant, ...props}) {
  return (
    <MUIButton sx={{color: "#f10065", mb:2, width:'80%', justifyContent:'center'}}variant={variant ?? "outlined"} {...props}>{children}</MUIButton>
  )
}