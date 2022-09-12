import AccountBoxIcon from '@mui/icons-material/AccountBox'
import React from 'react'
import "./Chat.css"
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import {  IconButton } from '@mui/material'
import AttachFileSharpIcon from '@mui/icons-material/AttachFileSharp';
import MoreVert from '@mui/icons-material/MoreVert'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicSharpIcon from '@mui/icons-material/MicSharp';
import { useState } from 'react'
import axios from './axios'
// import dbMessages from '../../Backend/dbMessages'

function Chat({messages}) {

  const [input,setinput]=useState("")
  const sendMessage=async (e)=>{
    e.preventDefault()
    await axios.post("/messages/new",{
      message:input,
      name:"chandan",
      time:"just now!",
      recieved:true,
    });
    setinput('');
  }
  return (
    <div className='chat'>

<div className='chat_header'>

      <AccountBoxIcon/>
      
      <div className='chat_info'>
        <h2>Room Name</h2>
        <p>this is the last message</p>
            </div>
            
         <div className='chat_headerRight'>
      <IconButton>
        <SearchOutlined/>
      </IconButton>
      <IconButton>
        <AttachFileSharpIcon/>
      </IconButton>
      <IconButton>
        <MoreVert/>
      </IconButton>
            </div>
</div>
<div className='chat_body'>
 {messages.map((message)=>(
 <p className='chat_msg'>
  <span className='chat_name'>{message.name} </span>
{message.message}
  <span className='chat_time'>
   { message.time}
</span></p>
 ))}


{/* <p className='chat_rec'>
  <span className='chat_name'>chandu </span>
  this is a message
  <span className='chat_time'>
   { new Date().toUTCString()}
</span></p>   */}
{/* {messages.map((message) => {
  
})} */}


</div>
<div className='chat_footer'>
<IconButton>
<InsertEmoticonIcon/>
    </IconButton>
<form>
  <input value={input} onChange={(e)=>setinput(e.target.value)} placeholder='type message' type="text"
  />
  <button onClick={sendMessage} type='submit'>send</button>
</form>
<IconButton>
<MicSharpIcon/>
  </IconButton>
</div>
    </div>
  
  )

  
}

export default Chat