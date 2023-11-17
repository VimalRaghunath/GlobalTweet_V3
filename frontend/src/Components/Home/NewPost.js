import React, { useState } from 'react';
import "./NewPost.css"
import TweetBox from './Feed/TweetBox';
import Sidebar from './Sidebar/Sidebar';



function NewPost() {
  

 
  return (
    <div className='Newpost'>
        
      <Sidebar/>
       <TweetBox/>
      

    </div>

  );
}


export default NewPost;