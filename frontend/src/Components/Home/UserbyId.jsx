import React, { useEffect, useState } from "react";
import { AxiosInstance } from "../AxiosInstance";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography
} from "@mui/material";
import Sidebar from "./Sidebar/Sidebar";
import Widgets from "./Widgets/Widgets";

const UserbyId = () => {
  const [userById, setUserById] = useState({});
  const [state, setState] = useState("");
  const { userId } = useParams();
  const [cookie, setCookie] = useCookies("cookies");

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        const user = await AxiosInstance.get(
          `/api/user/getuserbyid/${userId}`,
          {
            headers: {
              Authorization: `bearer ${cookie.cookies}`,
            },
          }
        );

        setUserById(user.data);
      } catch (error) {
        console.error("Error fetching user by ID:", error);
      }
    };

    fetchUserById();
  }, [userId, cookie.cookies]);

  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div className="Profile">
        <div className="Profilecontent">
          <div className="Profileheader">
            <Avatar
              src={state?.userpro?.Avatar}
              alt={state?.userpro?.username}
              className="Profileavatar"
            />
            <div className="Profiletitles">
              <h3>{state?.userpro?.name}</h3>
              <h4>{state?.userpro?.username}</h4>
              <p>{state?.userpro?.bio}</p>
            </div>
          </div>

          {/* <div className="ProfilePosts">
            <h2>User Posts</h2>
            {mypost?.data?.map((post) => (
              <div key={post._id}>
                <p>{post.description}</p>
                <img src={post.image} width={500} />
              </div>
            ))}
          </div>
        </div> */}

          <div>
            <u>
              <h2 style={{ textAlign: "center" }}>All Posts</h2>
            </u>
            <Card sx={{ maxWidth: 545 }}>
              {userById?.data?.map((post) => (
                <div key={post._id}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" src={post?.userId?.Avatar} />
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={post?.userId?.username}
                    subheader="September 14, 2016"
                  />
                  {post?.image ? (
                    <CardMedia
                      component="img"
                      image={post?.image}
                      alt="Paella dish"
                    />
                  ) : null}

                  {/* <CardMedia component="img" image={post.image} alt="Paella dish" /> */}
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {post.description}
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
        </div>

        <div className="Widgets">
          <Widgets />
          <div></div>
        </div>
      </div>
    </>
  );
};

export default UserbyId;
