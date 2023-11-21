import { Avatar } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import Sidebar from './Sidebar/Sidebar';
import Widgets from './Widgets/Widgets';



function Profile() {


  const [state,setState] = useState('')
  const [cookie,setcookie] = useCookies(["cookies"])

  useEffect( () => {
    async function newcookie (){

      const posts =  await axios.get(
          "http://localhost:7777/api/user/profile",
          {
            
            headers:{
              Authorization:`bearer ${cookie.cookies}`
            }
            
          }
        );

        console.log(posts.data);
        setState(posts.data)
  
    }
    newcookie()
  },[])
  return (

    <div className='Post'>

      <Sidebar/>
      
    <Avatar 
      src='https://images.unsplash.com/photo-1559065188-2537766d864b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      className='Postavatar'/>
    <div className='Postcontent'>
      <div className='Postheader'>
       <div className='Posttitles'>
          <h3>{state?.userpro?.name}</h3>
          <h4>{state?.userpro?.username}</h4>
          <p>{state?.userpro?.bio}</p>
       </div>
        
      
       </div>
      
      
    </div>

    <Widgets/>
     
  </div>
      






                                  
    // {/* name: String,
    // email: String,
    // mobile: String,
    // username: String,
    // password: String,
    // id: String,
    // bio: String,
    // avatar : String,
    // following: Array,
    // followers: Array,
    // isBlocked */}
                                     





  )
}

export default Profile
