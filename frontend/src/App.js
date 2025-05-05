import './App.css';
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Home from './Components/Home/Home';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import {  CssBaseline, Box, Grid } from '@mui/material';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar/>
    <Box sx={{ height: '90vh' }}>
      {!isLoggedIn ? (
        <Home onLogin={() => setIsLoggedIn(true)} /> // Pass login callback to Home
      ) : (
          <Dashboard/>
      )}
    </Box>
  </ThemeProvider>
  );
}

export default App;
