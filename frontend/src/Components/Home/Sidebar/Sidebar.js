import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption/SidebarOption'
import {Home,Search,NotificationsNone,MailOutline,PermIdentity } from "@mui/icons-material"
import Logo from "../../Assets/GlobalTweet.jpg"
import { Button, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Sidebar = () => {

  const navigate = useNavigate()

  return (
    <div>
      <img className='image' src={Logo} />
      <div style={{display:'flex',flexDirection:"column"}}>
      <IconButton onClick={()=>navigate("/home")}><SidebarOption active Icon={Home} text="Home" /></IconButton>
      <IconButton onClick={()=>navigate("/explore")}><SidebarOption Icon={Search} text="Explore" /></IconButton>
      <IconButton onClick={()=>navigate("/notifications")}><SidebarOption Icon={NotificationsNone} text="Notifications" /></IconButton>
      <IconButton onClick={()=>navigate("/messages")}><SidebarOption Icon={MailOutline} text="Messages" /></IconButton>
      <IconButton onClick={()=>navigate("/profile")}><SidebarOption Icon={PermIdentity} text="Profile" /></IconButton>
      </div>
      <Button onClick={()=>navigate("")} className='Sidebarnewpost' variant='outlined' fullWidth>
        New Post
      </Button>

    </div>
  )
}

export default Sidebar
