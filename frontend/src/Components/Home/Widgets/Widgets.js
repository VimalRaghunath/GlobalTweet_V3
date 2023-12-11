import React, { useState,useEffect } from 'react'
import "./Widgets.css"
import List from "@mui/material/List"
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { AxiosInstance } from '../../AxiosInstance';

function Widgets() {
 
//  const [state,setState] = useState("")
 const [peoples,setPeoples] = useState([])
console.log(peoples);


 useEffect(() => {
  async function getall() {
    const profiles = await AxiosInstance.get("/api/user/allusers");
    // console.log(post);
    setPeoples(profiles.data);
    // console.log("profiles",profiles.data);
  }
  getall();
}, []);


  return (
    <div className='Widgets'>
       <b>Who to follow</b>
         

       <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {peoples?.map((name)=>(
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={name?.Avatar} />
        </ListItemAvatar>
        <ListItemText 
          primary=  {name?.username}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              {name?.name}
              </Typography>

              <button className='followbutton'> Follow </button>
            </React.Fragment>
          }
        />
      </ListItem>
))}
      {/* <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="@Arshadkallarakkal"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Arshad Kallarakkal
              </Typography>
              <button className='followbutton'> Follow </button>
            </React.Fragment>
          }
          
        />
        
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="@Akhilck"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Akhil C K
              </Typography>
             <button className='followbutton'> Follow </button>
            </React.Fragment>
          } 
        />      
       
      </ListItem> */}
      
    </List>
    
   
  

    </div>
  
    
  ) 
}

export default Widgets




   