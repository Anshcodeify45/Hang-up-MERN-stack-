import React from 'react';
import { Box, List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Sidebar = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', height: '100%', p: 2 }}>
      <Typography variant="h6">Message Category</Typography>
      <Divider sx={{ my: 2 }} />
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: '#e1306c' }}>
              <InstagramIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Instagram" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: '#25d366' }}>
              <WhatsAppIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="WhatsApp" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: '#0077b5' }}>
              <LinkedInIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="LinkedIn" />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle1">Direct Messages</Typography>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>A</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Ann Schleifer" secondary="Hi! I noticed a square..." />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
