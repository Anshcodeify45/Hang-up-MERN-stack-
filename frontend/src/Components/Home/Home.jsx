import React from 'react'
import { Box,Typography,styled } from '@mui/material'
import {Container} from '@mui/material'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Login from '../Login_Signup/Login';
import Signup from '../Login_Signup/Signup';
import { AuthProvider } from '../../Context/AuthProvider';
const HeadingBox = styled('Box')`
   display:flex;
   justify-content:center;
   width:30%;
   margin:40px auto 15px auto;
   padding:24px;
   border:2px solid;
   border-radius:20px;
`
const LogBOx = styled('Box')`
  display:flex;
  justify-content:center; 
   margin:0 auto 15px auto;
   width:29%;
   border-radius:15px;
   border:2px solid;
   padding:32px;
` 

function Home({onLogin}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth="xl" >
           <HeadingBox>
            <Typography fontSize={36} fontFamily={"Work sans"}> Hang Up</Typography>
           </HeadingBox>
           <LogBOx>
            <Box>
            <TabContext value={value}>
            <Box>
              <TabList onChange={handleChange} aria-label="lab API tabs example" style={{
                  marginLeft: value === "1" ? 40 : 98,
                }}>
                <Tab icon={<PersonAddAltIcon />} label="Sign up" value="1" />
                <Tab icon={<AccountCircleIcon />} label="Log in" value="2" />
              </TabList>
            </Box>
            <Box>
            <TabPanel value="1"><Signup setTabValue={setValue} /></TabPanel>
            
            <TabPanel value="2">
            <AuthProvider>
              <Login onLogin={onLogin}/>             
              </AuthProvider>
              </TabPanel>
            
            </Box>
          </TabContext>
          </Box>
           </LogBOx>
    </Container>
  )
}

export default Home
