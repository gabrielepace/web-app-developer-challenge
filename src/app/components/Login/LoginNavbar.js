import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function LoginNavbar() {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 0, left: 0 }}>
        <Toolbar>
            <Typography variant="h5">
                Star Wars
            </Typography>
        </Toolbar>  
    </AppBar> 
  );
}