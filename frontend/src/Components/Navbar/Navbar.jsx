import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1e1e2d' }}>
    <Toolbar>
      {/* Left side - Menu button */}
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>

      {/* Center - Title */}
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        ChatApp
      </Typography>

      {/* Right side - Icons */}
      <Box>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
  )
}

export default Navbar
