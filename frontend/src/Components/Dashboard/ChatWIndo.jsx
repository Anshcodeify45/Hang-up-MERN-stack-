import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';
import MessageInput from './MessageInput';
import { AuthContext } from '../../Context/AuthProvider';
import { useContext } from 'react';
const ChatWindow = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <Box sx={{ p: 2, height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar sx={{ mr: 2 }}>A</Avatar>
        <Typography variant="h6">{user.name}</Typography>
        <Typography variant="caption" color="green" sx={{ ml: 2 }}>
          Online
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
        <Paper sx={{ p: 2, mb: 2, bgcolor: '#2c2c3e' }}>
          <Typography variant="body2">Hey! Did you check out that new café?</Typography>
        </Paper>
        <Paper sx={{ p: 2, mb: 2, bgcolor: '#8e97fd', alignSelf: 'flex-end', color: 'black' }}>
          <Typography variant="body2">Yes! The ambiance is cozy.</Typography>
        </Paper>
      </Box>

      <MessageInput />
    </Box>
  );
};

export default ChatWindow;
