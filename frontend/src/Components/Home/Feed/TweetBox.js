import React from 'react'
import "./TweetBox.css"
import { Avatar,Button } from "@mui/material"
import { ImageOutlined,GifBoxOutlined,PollOutlined,SentimentDissatisfiedOutlined,CalendarTodayOutlined,LocationCityOutlined } from "@mui/icons-material"

function TweetBox() {
  return (
    <div className='TweetBox'>
      Create a post
      <form className='TweetBoxform'>
        <Avatar className='TweetBoxavatar' src='https://images.unsplash.com/photo-1559065188-2537766d864b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <div className='TweetBoxformfield'>
          <div className='TweetBoxinput'>
            <input type='file' placeholder="What's happening"/>
          </div>
           <div className='TweetBoxinput'>
              <div className='TweetBoxicons'>
                <ImageOutlined className='TweetBoxicon'/>   
                <GifBoxOutlined  className='TweetBoxicon'/>
                <PollOutlined  className='TweetBoxicon'/>
                <SentimentDissatisfiedOutlined  className='TweetBoxicon'/>
                <CalendarTodayOutlined  className='TweetBoxicon'/>
                <LocationCityOutlined  className='TweetBoxicon'/>
              </div>
             <Button className='TweetButton'>Post</Button>
           </div>
        </div>
      </form>
    </div>
  )
}

export default TweetBox
