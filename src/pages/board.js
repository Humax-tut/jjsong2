import React, { render, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { getUserbyId, setBoard } from "../service";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    width: '25ch',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
  },
}));

function Board() {
  
  const myObject = JSON.parse(localStorage.getItem("persist:root")).user;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    UpdateUser();
    setOpen(false);
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeContent = (e) => {
    setContent(e.target.value);
  };

  const UpdateUser = async () => {
    let result =  await setBoard(-1, title, content, myObject);
    console.log('result'+result);
    if(result == "success") {
      alert('success');
      
    }
    else {
      alert(result);
    }
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">게시판 글쓰기</DialogTitle>
        <DialogContent>
          <form className={classes.root} noValidate autoComplete="off">
            <DialogContentText>
              제목:
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="title"
              type="=text"
              value={title}
              onChange={changeTitle}
              fullWidth
            />
            <DialogContentText>
              내용:
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="content"
              label="content"
              type="text"
              fullWidth
              multiline
              variant="outlined"
              value={content}
              onChange={changeContent}
              rows={20}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default Board;
