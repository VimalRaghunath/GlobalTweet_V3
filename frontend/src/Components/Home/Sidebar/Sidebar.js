import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption/SidebarOption'
import {Home,Search,NotificationsNone,MailOutline,PermIdentity } from "@mui/icons-material"
import { Button } from "@mui/material"

function Sidebar() {
  return (
    <div>
      <SidebarOption active Icon={Home} text="Home" />
      <SidebarOption Icon={Search} text="Explore" />
      <SidebarOption Icon={NotificationsNone} text="Notifications" />
      <SidebarOption Icon={MailOutline} text="Messages" />
      <SidebarOption Icon={PermIdentity} text="Profile" />
      
      <Button className='Sidebarnewpost' variant='outlined' fullWidth>
        New Post
      </Button>

    </div>
  )
}

export default Sidebar
