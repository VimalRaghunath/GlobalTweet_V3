import React, { useState } from 'react';
import { Avatar,Button } from "@mui/material"
import { ImageOutlined,GifBoxOutlined,PollOutlined,SentimentDissatisfiedOutlined,CalendarTodayOutlined,LocationCityOutlined } from "@mui/icons-material"
import "./NewPost.css"


function NewPost() {
  
  const [tweetContent, setTweetContent] = useState('');

  const handleTweetChange = (e) => {
    setTweetContent(e.target.value);
  };

  
  const handleTweetSubmit = (e) => {
    e.preventDefault();

    console.log('New Tweet:', tweetContent);

    setTweetContent('');
  };

 
  return (
     <div className='Newpost'>
      Create a post
      <form className='Newpostform'>
        <Avatar className='Newpostavatar'/>
        <div className='Newpostformfield'>
          <div className='Newpostinput'>
            <input type='Text' placeholder="What's happening"/>
          </div>
           <div className='Newpostinput'>
              <div className='Newposticons'>
                <ImageOutlined className='Newposticon'/>   
                <GifBoxOutlined  className='Newposticon'/>
                <PollOutlined  className='Newposticon'/>
                <SentimentDissatisfiedOutlined  className='Newposticon'/>
                <CalendarTodayOutlined  className='Newposticon'/>
                <LocationCityOutlined  className='Newposticon'/>
              </div>
             <Button className='Newpostbutton'>Post</Button>
           </div>
        </div>
      </form>
    </div>
  );
}


export default NewPost;