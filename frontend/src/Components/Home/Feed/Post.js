import React, { useEffect, useState } from "react";
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

  console.log(post.data);

  useEffect(() => {
    async function getall() {
      const posts = await AxiosInstance.get("/api/user/post");
      setPosts(posts.data);
      console.log(posts.data);
    }
    getall();
  }, []);

  return (
    <div >
      <h2> posts</h2>

      <Card sx={{ maxWidth: 545 }}>
        {post.data?.map((post) => (
          <div key={post?.title}>
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
            <CardMedia component="img" image={post?.image} alt="Paella dish" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {post?.description}
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
