import React, {useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {AppContext} from '../context/AppContext';

export default function ImageAvatar() {
    const {user} = useContext(AppContext)

  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="user" src={user?.img} />
    </Stack>
  );
}
