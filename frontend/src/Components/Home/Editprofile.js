import React from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import uploadAvatar from '../CloudinaryAvatar';

function Editprofile({ open, onClose }) {

    const handleSave = () => {
        onClose();
    }
  return (
    <div>
       <Dialog open={open} onClose={onClose}>
      
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogContent>
      <TextField type='file' fullWidth />

        <TextField label="Name" fullWidth defaultValue={{}} />
        <TextField label="Username" fullWidth defaultValue={{}}/>
        <TextField label="Bio" fullWidth multiline rows={3} defaultValue={{}}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
    </div>
  )
}

export default Editprofile


//this is from gpt