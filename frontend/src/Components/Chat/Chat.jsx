import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Box,Typography} from "@mui/material"

function Chat() {

  const [chats,setChats] = useState([]);


  const fetchChats = async () =>  {
    const {data} = await axios.get('/api/chat');
    setChats(data);
  }

  useEffect(() => {
    fetchChats();
  },[])
  return (
    <div>
      {
        chats.map(chat=>
          <Box key={chat._id}>
              <Typography>{chat.chatName}</Typography>
          </Box>
        )
      }
    </div>
  )
}

export default Chat
