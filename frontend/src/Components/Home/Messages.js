import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import "./Messages.css"
import { AxiosInstance } from '../AxiosInstance'
import io from "socket.io-client"
import axios from 'axios'
import { Button } from '@mui/material'


const socket = io(AxiosInstance.get("/api/user/messages"))

const Messages = () => {
  const [messagess, setMessagess] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
   
    socket.on('message', (data) => {
      setMessagess((prevMessages) => [...prevMessages, data]);
    });

    
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    
    axios.post('/api/user/send-message', { content: newMessage }).then(() => {
      
      socket.emit('message', newMessage);

      
      setNewMessage('');
    });
  };
  return (

    <div className='Messages'>
    <Sidebar />
    <div className='Messagesbox'>
      <ul>
        {messagess.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />

      <Button onClick={handleSendMessage}>Send Message</Button>
    </div>
  </div>
);
};

export default Messages
