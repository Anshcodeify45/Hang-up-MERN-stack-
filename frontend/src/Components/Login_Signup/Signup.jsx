import React from 'react';
import { Stack, TextField ,Box , InputAdornment, IconButton,Button, duration } from '@mui/material';
import { FormControl } from '@mui/material';
import { toast } from 'react-toastify';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Signup({ setTabValue }) {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmPassword] = useState();
    const [email, setEmail] = useState();
    const [loading, setLoading] = useState(false);
    const history = useNavigate();



    const submitHandler = async () => {
      setLoading(true);
      if(!name || !email || !password || !confirmpassword){
        toast({
          title:"Please Fill the Feilds",
          status : "warning",
          duration:5000,
          isClosable: true,
          position:"bottom",
        });
        setLoading(true);
        return;
      }
      if(password !== confirmpassword){
        toast({
          title:"Passwords Do not Match",
          status : "warning",
          duration:5000,
          isClosable: true,
          position:"bottom",
        });
        return;
      }

      try {
        const config = {
          headers :{
            "Content-type":"application/json",
          },
        }
        const {data} = await axios.post(
          "/api/user/signup",
          {name , email , password },
          config
        );
        console.log(data);
        toast({
          title:"Registration Successful",
          status : "success",
          duration:5000,
          isClosable: true,
          position:"bottom",
        });
        localStorage.setItem('userInfo',JSON.stringify(data));
        setLoading(false);
        setTabValue('2');
        history('/login');
      } catch (error) {
        toast({
          title:"Error Occured",
          description:error.response.data.message,
          status : "error",
          duration:5000,
          isClosable: true,
          position:"bottom",
        });
      }

    };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div>
      <Stack spacing={2}>
      <FormControl>
         <TextField id="outlined-basic" label="Enter Name" variant="outlined" onChange={(e)=> setName(e.target.value)} style={{color:"black"}}/>
        </FormControl>
        <FormControl>
         <TextField id="outlined-basic" label="Enter Phone" variant="outlined" onChange={(e)=> setPhone(e.target.value)} style={{color:"black"}}/>
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
            }} style={{color:"black"}}/>
        </FormControl>
        <FormControl>
         <TextField label="Password"
            variant="outlined"
            type="password"
            onChange={(e)=> setConfirmPassword(e.target.value)}
            style={{color:"black"}}
            />
        </FormControl>
        <FormControl>
         <TextField id="outlined-basic" label="Enter Email" variant="outlined"  onChange={(e)=> setEmail(e.target.value)} style={{color:"black"}}/>
        </FormControl>
        <FormControl>
         <Button variant="contained" onClick={submitHandler} >Sign Up</Button>
        </FormControl>
      </Stack>
    </div>
  )
}

export default Signup
