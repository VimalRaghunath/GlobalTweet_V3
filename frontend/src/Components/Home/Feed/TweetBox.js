import React from 'react'
import "./TweetBox.css"
import { Avatar,Button } from "@mui/material"
import { ImageOutlined,GifBoxOutlined,PollOutlined,SentimentDissatisfiedOutlined,CalendarTodayOutlined,LocationCityOutlined } from "@mui/icons-material"

function TweetBox() {
  return (
    <div className='TweetBox'>
      Create a post
      <form className='TweetBoxform'>
        <Avatar className='TweetBoxavatar'/>
        <div className='TweetBoxformfield'>
          <div className='TweetBoxinput'>
            <input type='Text' placeholder="What's happening"/>
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
