import React from 'react'
import Sidebar from './Sidebar';
import ChatWindow from './ChatWIndow';
import RightPanel from './RightPanel';
import { Grid } from '@mui/material';
import { useState } from 'react';

function Dashboard() {
  const [userData,setUserData] = useState({});
  
  return (
    <div>
        <Grid container sx={{ height: '91vh',width:"100%" }}>
          <Grid item xs={6} size={3}><Sidebar  setUserData={setUserData}/></Grid>
          <Grid item xs={4} size={7}><ChatWindow  userData={userData}/></Grid>
          <Grid item xs={4} size={2}><RightPanel /></Grid>
        </Grid>
    </div>
  )
}

export default Dashboard
