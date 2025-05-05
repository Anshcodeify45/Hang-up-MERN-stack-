import React from 'react';
import { Box, List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, Divider ,CircularProgress} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState ,useEffect } from 'react';
import axios from 'axios';

const Sidebar = () => {

  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        const token = userInfo?.token;
  
        if (!token) {
          console.error("No token found in localStorage");
          return;
        }
  
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,  // Make sure the token is passed here
          },
        };
  
        const { data } = await axios.get('/api/user', config);  // Correct endpoint for fetching users
        console.log("Fetched users:", data);
        setUsers(data);
        setLoadingUsers(false);
      } catch (error) {
        console.error("Error fetching users:", error.response?.data || error.message);
      }
    };
  
    fetchAllUsers();
  }, []);
  
  


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
      {loadingUsers ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <CircularProgress size={24} />
          </Box>
        ) : (
          <Box sx={{ maxHeight: 295, overflowY: 'auto', '::-webkit-scrollbar': { display: 'none' } }}>
            <List>
              {users.map((user) => (
                <ListItem key={user._id}>
                  <ListItemAvatar>
                    <Avatar>{user.name.charAt(0).toUpperCase()}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={user.name} secondary={user.status || 'Available'} />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
    </Box>
  );
};

export default Sidebar;
