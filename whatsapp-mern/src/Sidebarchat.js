import React from 'react'
import "./Sidebarchat.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox'
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
function Sidebarchat() {
  return (
    <div className='sidebarchat'>
     <AccountBoxIcon/>
         <div className='sidebarchat_info'>
        <h2>Room Name</h2>
        <p>this is the last message</p>
            </div>

    </div>
  )
}

export default Sidebarchat