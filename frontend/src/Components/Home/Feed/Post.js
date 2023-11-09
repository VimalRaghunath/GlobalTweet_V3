import React from 'react'
import "./Post.css"
import { Avatar } from "@mui/material"
import { MoreHoriz,ChairAltOutlined,Repeat,FavoriteBorderOutlined,PublishOutlined } from "@mui/icons-material"

function Post() {
  return (
    <div className='Post'>
      <Avatar 
        src='https://images.unsplash.com/photo-1559065188-2537766d864b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        className='Postavatar'/>
      <div className='Postcontent'>
        <div className='Postheader'>
         <div className='Posttitles'>
            <h3>Dilshad Basith</h3>
            <h4>@Dilshadbasith</h4>
         </div>
           <MoreHoriz className='Postoptions'/>
         </div>
         <div className='Postdescription'>
           it's my latest click, my own photography
         </div>
         <div className='Postmedia'>
            <img src="https://images.unsplash.com/photo-1559065188-2537766d864b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=''/>
         </div>
         <div className='Postfooter'>
            <ChairAltOutlined fontSize='small'/>
            <Repeat fontSize='small'/>
            <FavoriteBorderOutlined fontSize='small'/>
            <PublishOutlined fontSize='small'/>
         </div>
      </div>
    </div>
  )
}

export default Post
