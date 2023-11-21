import React from 'react'
import "./TweetBox.css"
import { Avatar,Button,IconButton } from "@mui/material"
import { ImageOutlined,GifBoxOutlined,PollOutlined,SentimentDissatisfiedOutlined,CalendarTodayOutlined,LocationCityOutlined } from "@mui/icons-material"

function TweetBox() {
  return (
    <div className='TweetBox'>
      Create a post
      <form className='TweetBoxform'>
        <Avatar className='TweetBoxavatar' src='https://images.unsplash.com/photo-1559065188-2537766d864b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <div className='TweetBoxformfield'>
          <div className='TweetBoxinput'>
            <input type='text' placeholder="What's happening"/>
          </div>
           <div className='TweetBoxinput'>
              <div className='TweetBoxicons'>
                <IconButton style={{position:"relative"}}>  <ImageOutlined className='TweetBoxicon'  /><input type='file' style={{opacity:0,width:10,position:"absolute"}}/></IconButton>  
                <IconButton><SentimentDissatisfiedOutlined  className='TweetBoxicon'/></IconButton>
                <IconButton><GifBoxOutlined  className='TweetBoxicon'/></IconButton>
                <IconButton><PollOutlined  className='TweetBoxicon'/></IconButton>
                <IconButton><CalendarTodayOutlined  className='TweetBoxicon'/></IconButton>
                <IconButton><LocationCityOutlined  className='TweetBoxicon'/></IconButton>
              </div>
             <Button className='TweetButton'>Post</Button>
           </div>
        </div>
      </form>
    </div>
  )
}

export default TweetBox
