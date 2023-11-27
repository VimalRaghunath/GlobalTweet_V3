import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import "./Notifications.css"
import Widgets from './Widgets/Widgets'

function Notifications() {
  return (

    <div className='Notifications'>

      <Sidebar/>
      <Widgets/>

    </div>
  )
}

export default Notifications
