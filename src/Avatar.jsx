import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f50b5'
    },
    secondary: {
      main: '#f44336'
    },
  },
});


export default function LetterAvatars() {


  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: "#f36da3", width: 100, height: 100}}>TP</Avatar>
    </Stack>
  );
}