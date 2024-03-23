import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { ThemeProvider, createTheme } from '@mui/material'

export default () => {
    const theme = createTheme({
        palette: {
            mode: 'light',
            primary: {
            main: '#999999',
            },
            secondary: {
            main: '#f50057',
            },
        }
    });
  return (
    <ThemeProvider theme={theme}>
        <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        </ButtonGroup>
    </ThemeProvider>
  );
}
