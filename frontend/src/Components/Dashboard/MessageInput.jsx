import React from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const MessageInput = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type a message..."
        sx={{ bgcolor: 'background.default', borderRadius: 1 }}
      />
      <IconButton color="primary">
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default MessageInput;
