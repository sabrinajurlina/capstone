import React from 'react';
import Button from '@mui/material/Button';
import {useTheme} from '@mui/material/styles';

export default function MyButton({children, variant, ...props}) {
  const theme = useTheme()
  return (
    <Button variant= 'outlined' {...props}>{children}</Button>
  )
}