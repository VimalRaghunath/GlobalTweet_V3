import React from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';


function Editprofile({ open, onClose }) {

    const handleSave = () => {
        onClose();
    }
  return (
    <div>
       <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogContent>
        <TextField label="Name" fullWidth />
        <TextField label="Username" fullWidth />
        <TextField label="Bio" fullWidth multiline rows={3} />
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