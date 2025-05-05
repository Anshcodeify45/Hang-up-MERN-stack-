import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { FormControl } from '@mui/material';
import { Stack, TextField ,InputAdornment, IconButton,Button,Typography } from '@mui/material';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import { useContext } from 'react';
function Login({onLogin}) {
        const [showPassword, setShowPassword] = useState(false);
         const [loading, setLoading] = useState(false);
           const [password, setPassword] = useState();
               const [email, setEmail] = useState();
            const history = useNavigate();
            const { login } = useContext(AuthContext);
            console.log(login);
    
            const submitHandler = async () => {
              setLoading(true);
            
              if (!email || !password) {
                toast({
                  title: "Please Fill the Fields",
                  status: "warning",
                  duration: 5000,
                  isClosable: true,
                  position: "bottom",
                });
                setLoading(false);
                return;
              }
            
              try {
                const config = {
                  headers: {
                    "Content-Type": "application/json",
                  },
                };
            
                const { data } = await axios.post(
                  "/api/user/login",
                  { email, password },
                  config
                );
            
                console.log(data);
            
                toast({
                  title: "Login Successful",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                  position: "bottom",
                });
                localStorage.setItem("userInfo", JSON.stringify(data));
                login(email, password);
                onLogin();
                setLoading(false);
                history("/chats");
              } catch (error) {
                const message =
                  error.response?.data?.message || error.message || "Something went wrong";
            
                toast({
                  title: "Error Occurred",
                  description: message,
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                  position: "bottom",
                });
            
                console.error("Login error:", error);
                setLoading(false);
              }
            };
            

        const handleClickShowPassword = () => {
            setShowPassword((prev) => !prev);
          };
  return (
    <div>
            <Stack spacing={2}>
            <FormControl>
               <TextField id="outlined-basic" label="Enter Email" variant="outlined"  onChange={(e)=> setEmail(e.target.value)}/>
              </FormControl>
              <FormControl>
                  <TextField id="outlined-basic" label="Enter Password" variant="outlined" fullWidth
                  onChange={(e)=> setPassword(e.target.value)}
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                      endAdornment: (
                      <InputAdornment position="end">
                          <IconButton onClick={handleClickShowPassword} edge="end">
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                          </IconButton>
                      </InputAdornment>
                      ),
                  }}/>
              </FormControl>

              <FormControl>
               <Button variant="contained" onClick={submitHandler}>Log In</Button>
              </FormControl>
              <Typography>Don't have an accoun? Create an account<Button style={{fontSize:10}}>Click here</Button></Typography>
            </Stack>
    </div>
  )
}

export default Login
