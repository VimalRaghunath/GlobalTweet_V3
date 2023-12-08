import React from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
  } from "@mui/material";

function Postmodal() {




  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        {/* {mypost?.data?.map((post))=>} */}
        <div>
        <DialogContent component="form" onSubmit={handleSubmit}>
          <TextField type="file" onChange={(e) => UploadAvatar(e)} fullWidth />
          <Button onClick={handleupload}>upload</Button>
        </DialogContent>
        <DialogContent>
          <TextField label="Title" fullWidth defaultValue={{}} />
          <TextField label="Description" fullWidth defaultValue={{}} />
          
        </DialogContent>
        </div>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Postmodal
