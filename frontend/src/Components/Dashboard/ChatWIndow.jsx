import React, { useState } from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';
import MessageInput from './MessageInput';
import { AuthContext } from '../../Context/AuthProvider';
import { useContext } from 'react';

const ChatWindow = ({userData}) => {
  const { user, logout } = useContext(AuthContext);
  const [messages, setMessages] = useState([
    { text: "Hey! Did you check out that new café?", senderId: userData._id },
    { text: "Yes! The ambiance is cozy.", senderId: user._id }
  ]);

  const handleSendMessage = (newMessage) => {
    setMessages((prev) => [...prev, { text: newMessage, senderId: user._id }]);
  };


  return (
    <Box sx={{ p: 2, height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar sx={{ mr: 2 }}>{userData.name.charAt(0).toUpperCase()}</Avatar>
        <Typography variant="h6">{userData.name}</Typography>
        <Typography variant="caption" color="green" sx={{ ml: 2 }}>
          Online
        </Typography>
      </Box>

      
      {/* Chat Messages */}
      <Box sx={{ flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 1 }}>
        {messages.map((msg, index) => (
          <Box
            key={index}
            sx={{ display: 'flex', justifyContent: msg.senderId === user._id ? 'flex-end' : 'flex-start' }}
          >
            <Paper
              sx={{
                p: 2,
                bgcolor: msg.senderId === user._id ? '#8e97fd' : '#2c2c3e',
                color: msg.senderId === user._id ? 'black' : 'white',
                borderRadius: 2,
                maxWidth: '70%',
              }}
            >
              <Typography variant="body2">{msg.text}</Typography>
            </Paper>
          </Box>
        ))}
      </Box>


      <MessageInput onSend={handleSendMessage}/>
    </Box>
  );
};

export default ChatWindow;
