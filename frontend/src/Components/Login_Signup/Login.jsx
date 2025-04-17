import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { FormControl } from '@mui/material';
import { Stack, TextField ,InputAdornment, IconButton,Button,Typography } from '@mui/material';



function Login() {
        const [showPassword, setShowPassword] = useState(false);

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
               <Button variant="contained">Log In</Button>
              </FormControl>
              <Typography>Don't have an accoun? Create an account<Button style={{fontSize:10}}>Click here</Button></Typography>
            </Stack>
    </div>
  )
}

export default Login
