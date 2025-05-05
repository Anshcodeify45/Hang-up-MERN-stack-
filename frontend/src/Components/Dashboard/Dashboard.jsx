import React from 'react'
import Sidebar from './Sidebar';
import ChatWindow from './ChatWIndo';
import RightPanel from './RightPanel';
import { Grid } from '@mui/material';


function Dashboard() {
  return (
    <div>
        <Grid container sx={{ height: '91vh',width:"100%" }}>
          <Grid item xs={6} size={3}><Sidebar /></Grid>
          <Grid item xs={4} size={7}><ChatWindow /></Grid>
          <Grid item xs={4} size={2}><RightPanel /></Grid>
        </Grid>
    </div>
  )
}

export default Dashboard
