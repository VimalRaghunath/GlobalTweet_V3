import { Avatar, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Sidebar from "./Sidebar/Sidebar";
import Widgets from "./Widgets/Widgets";
import { AxiosInstance } from "../AxiosInstance";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import Editprofile from "./Editprofile";

function Profile() {
  const [state, setState] = useState("");
  const [cookie, setcookie, removecookie] = useCookies(["cookies"]);
  const [mypost, setMypost] = useState([]);
  const navigate = useNavigate();
  const [editProfileOpen, setEditProfileOpen] = useState(false);

  console.log(mypost);

  useEffect(() => {
    async function newcookie() {
      const posts = await AxiosInstance.get("/api/user/profile", {
        headers: {
          Authorization: `bearer ${cookie.cookies}`,
        },
      });

      const userposts = await AxiosInstance.get("/api/user/profileposts", {
        headers: {
          Authorization: `bearer ${cookie.cookies}`,
        },
      });
      setMypost(userposts.data);
      console.log(posts.data);
      setState(posts.data);
    }

    newcookie();
  }, []);

  console.log(state);

  const handleEditProfileClick = () => {
    setEditProfileOpen(true);
  };

  const handleCloseEditProfile = () => {
    setEditProfileOpen(false);
  };

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
              <Avatar
                src="https://images.unsplash.com/photo-1559065188-2537766d864b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="Profileavatar"
              />
            <div className="Profiletitles">
              <h3>{state?.userpro?.name}</h3>
              <h4>{state?.userpro?.username}</h4>
              <p>{state?.userpro?.bio}</p>
            </div>
          </div>

          <div className="ProfilePosts">
            <h2>User Posts</h2>
            {mypost?.data?.map((post) => (
              <div key={post._id}>
                <p>{post.description}</p>
                <img src={post.image} width={500} />
              </div>
            ))}
          </div>
        </div>

        <div className="Widgets" >
          <Widgets/>
          <div>
       <Button onClick={handleEditProfileClick}>Edit Profile</Button>
     </div>
          <Button className='Logout' onClick={()=>navigate('/')} > Logout </Button>
        </div>

        <Editprofile open={editProfileOpen} onClose={handleCloseEditProfile}/>
      </div>
    </>
  );
}

export default Profile;
