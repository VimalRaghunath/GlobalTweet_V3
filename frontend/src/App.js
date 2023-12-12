import "./App.css"
import React from 'react'
import CreateanAccount from "./Components/CreateanAccount"
import Signin from "./Components/Signin"
import Home from "./Components/Home/Home"
import { Routes, Route } from "react-router-dom"
import NewPost from "./Components/Home/NewPost"
import Profile from "./Components/Home/Profile"
import Messages from "./Components/Home/Messages"
import Explore from "./Components/Home/Explore"
import Notifications from "./Components/Home/Notifications"
import Post from "./Components/Home/Feed/Post"
import UserbyId from "./Components/Home/UserbyId"

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/createanaccount" element={<CreateanAccount />} />
          <Route path="/home" element={<Home />} />
          <Route path="/newpost" element={<NewPost/>}/>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/messages" element={<Messages/>} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/notifications" element={<Notifications/>} />
          <Route path="/post" element={<Post/>} />
          <Route path="/userbyid/:userId" element={<UserbyId/>}/>
          
          
        </Routes>
      </div>
    </div>
  )
}

export default App;
