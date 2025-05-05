import React from 'react';
import { Box, Typography, Avatar, Divider, Grid, IconButton } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import ImageIcon from '@mui/icons-material/Image';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { AuthContext } from '../../Context/AuthProvider';
import { useContext } from 'react';


const RightPanel = () => {
   const { user, logout } = useContext(AuthContext);
  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper', height: '100%' ,width:"100%"}}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar sx={{ width: 56, height: 56, mr: 2 }}>A</Avatar>
        <Box>
          <Typography variant="h6">{user.name}</Typography>
          <Typography variant="caption">{user.email}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 2 }}>
        <IconButton><FolderIcon /></IconButton>
        <IconButton><ImageIcon /></IconButton>
        <IconButton><PostAddIcon /></IconButton>
      </Box>
      <Divider />
      <Typography variant="subtitle2" sx={{ mt: 2 }}>Shared Media</Typography>
      <Grid container spacing={1} sx={{ mt: 1 }}>
        {[...Array(6)].map((_, i) => (
          <Grid item xs={4} key={i}>
            <Box sx={{ width: '100%', height: 60, bgcolor: '#333', borderRadius: 1 }} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RightPanel;
