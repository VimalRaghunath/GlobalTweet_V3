import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button, IconButton } from "@mui/material";
import {
  ImageOutlined,
  GifBoxOutlined,
  PollOutlined,
  SentimentDissatisfiedOutlined,
  CalendarTodayOutlined,
  LocationCityOutlined,
} from "@mui/icons-material";
import upload from "../../Cloudinary";
import { AxiosInstance } from "../../AxiosInstance";
import { useCookies } from "react-cookie";

function TweetBox() {
  const [cookie, setcookie] = useCookies(["cookies"]);
  const [state, setState] = useState({
    title: "",
    image: "",
    description: "",
    category: "",
  });

  const handleUpload = async (e) => {
    e.preventDefault();

    const photo = await upload(e.target.files[0]);
    console.log(photo);
    setState({ ...state, image: photo });
  };

  const handleClick = async () => {
    AxiosInstance.post(`/api/user/newpost`, state, {
      headers: {
        Authorization: `bearer ${cookie.cookies}`,
      },
    });
     window.location.reload()
  };
  
  return (
    <div className="TweetBox">
      Create a post
      <form className="TweetBoxform">
        <Avatar
          className="TweetBoxavatar"
          src="https://images.unsplash.com/photo-1559065188-2537766d864b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="TweetBoxformfield">
          <div className="TweetBoxinput">
            <input type="text" placeholder="What's happening" />
          </div>
          <div className="TweetBoxinput">
            <div className="TweetBoxicons">
              <IconButton style={{ position: "relative" }}>
                {" "}
                <ImageOutlined className="TweetBoxicon" />
                <input
                  type="file"
                  style={{ opacity: 0, width: 10, position: "absolute" }}
                  onChange={handleUpload}
                />
              </IconButton>
              <IconButton>
                <SentimentDissatisfiedOutlined className="TweetBoxicon" />
              </IconButton>
              <IconButton>
                <GifBoxOutlined className="TweetBoxicon" />
              </IconButton>
              <IconButton>
                <PollOutlined className="TweetBoxicon" />
              </IconButton>
              <IconButton>
                <CalendarTodayOutlined className="TweetBoxicon" />
              </IconButton>
              <IconButton>
                <LocationCityOutlined className="TweetBoxicon" />
              </IconButton>
            </div>
            <Button className="TweetButton" onClick={handleClick}>
              Post
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
