import React from 'react';
import { Stack, TextField ,Box , InputAdornment, IconButton,Button } from '@mui/material';
import { FormControl } from '@mui/material';
import {InputLabel,Input} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmPassword] = useState();
    const [email, setEmail] = useState();

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div>
      <Stack spacing={2}>
      <FormControl>
         <TextField id="outlined-basic" label="Enter Name" variant="outlined" onChange={(e)=> setName(e.target.value)}/>
        </FormControl>
        <FormControl>
         <TextField id="outlined-basic" label="Enter Phone" variant="outlined" onChange={(e)=> setPhone(e.target.value)}/>
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
         <TextField label="Password"
            variant="outlined"
            type="password"
            onChange={(e)=> setConfirmPassword(e.target.value)}
            />
        </FormControl>
        <FormControl>
         <TextField id="outlined-basic" label="Enter Email" variant="outlined"  onChange={(e)=> setEmail(e.target.value)}/>
        </FormControl>
        <FormControl>
         <Button variant="contained">Sign Up</Button>
        </FormControl>
      </Stack>
    </div>
  )
}

export default Signup
