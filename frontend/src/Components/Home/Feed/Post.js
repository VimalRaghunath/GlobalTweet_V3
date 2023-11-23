import React, { useEffect, useState } from 'react'
import "./Post.css"
import { AxiosInstance } from '../../AxiosInstance';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function Post() {

 const [post,setPosts] = useState([])
 
 console.log(post.data);

 useEffect( () => {
   async function getall(){

     const posts =  await AxiosInstance.get
        ("/api/user/post")
       setPosts(posts.data);
       console.log(posts.data);
 
   }
   getall()
 },[])

  return (




    <div>
        
        <h1> All posts</h1>
        
 

        <Card sx={{ maxWidth: 545 }}>
        {post.data?.map((post) => (
          <div key={post?.title}> 
          
      <CardHeader
        avatar={
          <Avatar  aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
           <MoreVertIcon/>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
       
        image={post?.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {post?.description} 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
         <FavoriteBorderRoundedIcon/>
        </IconButton>
        <IconButton aria-label="share">
         <ShareRoundedIcon/>
        </IconButton>
      
      </CardActions>
    
     
      </div>
       ) )}
    </Card>

    </div>






    // <div className='Post'>
    //   <Avatar 
    //     src='https://images.unsplash.com/photo-1559065188-2537766d864b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    //     className='Postavatar'/>
    //   <div className='Postcontent'>
    //     <div className='Postheader'>
    //      <div className='Posttitles'>
    //         <h3>Dilshad Basith</h3>
    //         <h4>@Dilshadbasith</h4>
    //      </div>
    //        <MoreHoriz className='Postoptions'/>
    //      </div>
    //      <div className='Postdescription'>
    //        it's my latest click, my own photography
    //      </div>
    //      <div className='Postmedia'>
    //         <img src="https://images.unsplash.com/photo-1559065188-2537766d864b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=''/>
    //      </div>
    //      <div className='Postfooter'>
    //         <ChairAltOutlined fontSize='small'/>
    //         <Repeat fontSize='small'/>
    //         <FavoriteBorderOutlined fontSize='small'/>
    //         <PublishOutlined fontSize='small'/>
    //      </div>
    //   </div>
    // </div>
  )
}

export default Post
