import React from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
const MessageInput = ({ onSend }) => {


  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() === '') return;

    onSend(message); // Pass message to parent
    setMessage('');
  };




  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{ bgcolor: 'background.default', borderRadius: 1 }}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
      <IconButton color="primary" onClick={handleSend}>
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default MessageInput;
