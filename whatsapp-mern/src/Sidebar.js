import React from 'react'    
import "./sidebar.css"
import DonutLarge from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
// import {Avatar,IconButton} from "@mui/icons-material/core"

import IconButton from '@mui/material/IconButton';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Sidebarchat from './Sidebarchat';
// import OutlinedInput from '@mui/material/OutlinedInput';

function Sidebar() {
  return (
    <div  className='sidebar'>
    {/* <h1> I am a sidebar</h1> */}
<div className='sidebar_header'>
<IconButton>
     <AccountBoxIcon src=""/>
     </IconButton>

<div className='sidebar_headerRight'>
<IconButton>
    <DonutLarge/>
     {/* <ChatIcon/> */}
     </IconButton>
     <IconButton>
     <ChatIcon/>
     </IconButton>
     
     <IconButton>
     <MoreVertIcon/>
     </IconButton>
   
      {/* <input type="text"></input> */}
    </div>
</div>
  
  <div className='sidebar_search'>
      <div className='sidebar_search_container'>
           <SearchOutlinedIcon/>
           <input placeholder='search or start new chat' type="text"/>
      </div>
    
     </div>
      <div className='sidebar_chats'>
      <Sidebarchat/>
      <Sidebarchat/>
      <Sidebarchat/>
      <Sidebarchat/>
      
      <Sidebarchat/>
      <Sidebarchat/>
      <Sidebarchat/>
      <Sidebarchat/>
     </div>
    </div>
  )
}

export default Sidebar