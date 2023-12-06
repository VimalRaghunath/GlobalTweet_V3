import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import "./Post.css";
import { AxiosInstance } from "../../AxiosInstance";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
function Post() {
  const [post, setPosts] = useState([]);

  

  useEffect(() => {
    async function getall() {
      const posts = await AxiosInstance.get("/api/user/post");
      // console.log(post);
      setPosts(posts.data);
      console.log("post",posts.data);
    }
    getall();
  }, []);

  // useEffect(() => {
  //   async function getall() {
  //     const posts = await AxiosInstance.get("/api/user/post");
  //     setPosts(posts.data);
  //   }
  
  //   getall();
  
  //   // Use the cleanup function to log after the component is re-rendered
  //   return () => {
  //     console.log(post.data);
  //   };
  // }, []);  // Add 'post' as a dependency
  

  return (
    <div >
      <h2> posts</h2>

      <Card sx={{ maxWidth: 545 }}>
  {post.data?.map((postItem, index) => (
    <div key={index}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Helloooo"
        subheader="September 14, 2016"
      />
      <CardMedia component="img" image={postItem?.image} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {postItem?.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderRoundedIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareRoundedIcon />
        </IconButton>
      </CardActions>
    </div>
  ))}
</Card>

    </div>
  );
}

export default Post;
