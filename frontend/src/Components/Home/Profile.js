import { Avatar, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Sidebar from "./Sidebar/Sidebar";
import Widgets from "./Widgets/Widgets";
import { AxiosInstance } from "../AxiosInstance";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import Editprofile from "./Editprofile";
import Editcoverphoto from "./Editcoverphoto";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import { FavoriteBorderRounded, FavoriteRounded } from "@mui/icons-material/FavoriteBorderRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";



function Profile() {
  const [state, setState] = useState("");
  const [cookie, setcookie, removecookie] = useCookies(["cookies"]);
  const [mypost, setMypost] = useState([]);
  console.log(mypost);
  const [posts,setPosts] = useState([])
  const navigate = useNavigate();
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [coverphotoOpen,setCoverphotoOpen] = useState(false);


  // console.log(mypost);

  useEffect(() => {
    async function newcookie() {
      const posts = await AxiosInstance.get("/api/user/profile", {
        headers: {
          Authorization: `bearer ${cookie.cookies}`,
        },
      });

      // const userposts = await AxiosInstance.get("/api/user/profileposts", {
      //   headers: {
      //     Authorization: `bearer ${cookie.cookies}`,
      //   },
      // });
      // setMypost(userposts.data);
      setState(posts.data);
    
    }

    newcookie();
    async function newcookiess() {
      const userposts = await AxiosInstance.get("/api/user/profileposts", {
        headers: {
          Authorization: `bearer ${cookie.cookies}`,
        },
      });
      setMypost(userposts.data.data);
    }
    newcookiess()
  }, []);



  console.log(mypost, "mypost");

  const handleEditProfileClick = () => {
    setEditProfileOpen(true);
  };

  const handleCloseEditProfile = () => {
    setEditProfileOpen(false);
  };

  


  const EditCoverphotoClick = () => {
    setCoverphotoOpen(true);
  };

  const CloseCoverphotoClick = () => {
    setCoverphotoOpen(false);
  }

  const handleLogout = () => {
    removecookie("cookies");
    navigate('/')
  }


  const handleFollow = async (userId) => {
    try {
      const response = await AxiosInstance.post(`/api/user/follow/${userId}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleUnfollow = async (userId) => {
    try {
      const response = await AxiosInstance.post(`/api/user/unfollow/${userId}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const handleLike = async (postId) => {
    try {
       await AxiosInstance.post('/api/user/like/',{
        userId:state?.userpro?._id,
        postId:postId,
       })
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect( () => {
  //   async function postcookie(){

  //     const profileposts =  await AxiosInstance.get(
  //         `/api/user/profile/${state.userpro.id}`,
  //         {

  //           headers:{
  //             Authorization:`bearer ${cookie.cookies}`
  //           }

  //         }
  //       );

  //       console.log( profileposts.data);
  //       setState( profileposts.data)

  //   }

  //   postcookie()
  // },[])

  return (
    <>
          <div>
        <Sidebar />
      </div>
    <div className="Profile">
      
     
        <div className="Profilecontent">
          <div className="Profileheader">
              <Avatar style={{ width: '100px', height: '100px' }}
                src={state?.userpro?.Avatar} 
                alt={state?.userpro?.username}
                className="Profileavatar"
              />
            <div className="Profiletitles">
              <h3>{state?.userpro?.name}</h3>
              <h4>{state?.userpro?.username}</h4>
              <p>{state?.userpro?.bio}</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",marginLeft:"20rem"}}>
               <div>
                 <Button onClick={() => handleFollow(state?.userId)}>Followers</Button>
              </div>
              <div>
                  <Button onClick={() => handleUnfollow(state?.userId)}>Following</Button>
              </div>
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
    <u><h2 style={{textAlign:"center"}}>My Posts</h2></u>
<Card sx={{ maxWidth: 545 }}>
  {mypost?.data?.map((post) => (
    <div key={post?._id}>
      <CardHeader
        avatar={<Avatar aria-label="recipe" src={post?.userId?.Avatar} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post?.userId?.username}
        subheader="September 14, 2016"
      />



      {post?.image  ? <CardMedia component="img" image={post?.image} alt="Paella dish" />:null}

      {/* <CardMedia component="img" image={post.image} alt="Paella dish" /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post?.description}
        </Typography>
        </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites" onClick={() => handleLike(post._id)}>
              {/* {post?.isLiked ? <FavoriteRounded /> : <FavoriteBorderRounded />} */}
            </IconButton>
            <Typography variant="body2" color="text.secondary">
              {post?.likes}
            </Typography>
        <IconButton aria-label="comment">
         <ChatBubbleOutlineRoundedIcon />
        </IconButton>&nbsp;
        <IconButton aria-label="retweet">
        <RepeatRoundedIcon />
        </IconButton>&nbsp;
        <IconButton aria-label="share">
          <ShareRoundedIcon />
        </IconButton>&nbsp;
      </CardActions>
    </div>
  ))}
</Card>
</div>     
</div>     

   


        <div className="Widgets" >
          <Widgets/>
          <div>
       <Button onClick={()=>handleEditProfileClick()}> Edit Profile </Button>
       <Button onClick={()=>EditCoverphotoClick()}>Edit Cover Photo</Button>
     </div>
          <Button className='Logout' onClick={()=>handleLogout()} > Logout </Button>
        </div>

        <Editprofile open={editProfileOpen} onClose={handleCloseEditProfile}/>
        <Editcoverphoto open={coverphotoOpen} onClose={CloseCoverphotoClick}/>
      </div>
      
      </>
  ); 
}



export default Profile;
