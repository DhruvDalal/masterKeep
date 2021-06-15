import {React,useState} from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '70ch',
    },
  },
  search: {
    position: 'relative',
    paddingBottom: '5px',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgb(241,243,244)',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.80),
    },
    marginLeft: '0%',
    width: '70%',
    height: '90%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    color: 'grey',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    position: 'relative',
    bottom: theme.spacing(-9.5),
    right: theme.spacing(-15.5),
    height: "50px",
    width: "50px",
    zIndex:"1",
  },
  inputRoot: {
    color: 'inherit',
  },

  inputInput: {
    padding: theme.spacing(2, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    color: 'grey',
    transition: theme.transitions.create('width'),
    width: '80%',
    [theme.breakpoints.up('sm')]: {
      width: '50ch',
      '&:focus': {
        width: '50ch',
      },
    },
  },

}));


 const Createnote = (props) =>{
  const [note,setNote]=useState({
    title:"",
    content:"",
  });
  const[expand,setExpand] =useState(false);
  const expandIt =()=>{
    setExpand(true);
  }
  const reverse =()=>{
    setExpand(false);
  }

  const inputEvent = (event) =>{
    const {name,value} = event.target;
    setNote((oldData)=>{
      return {
        ...oldData,[name]:value,
      }
    });
    console.log(note);
  }
  const addEvent = () =>{
    if(note.title ==="" || note.content ===""){

    }else{
    props.passNote(note);}
    setNote({
      title:"",
      content:"",
    });
    reverse();
  }

  const classes = useStyles();
  return (
    <>
      <div className="main_note" onDoubleClick={reverse}>
       

            <form className={classes.root} noValidate autoComplete="off">
            {expand?
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <EditIcon />
              </div>
              <InputBase
                placeholder="Title…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={note.title}
                onChange={inputEvent}
                name="title"
              />
            </div>: null}
              <TextField
                id="outlined-password-input"
                label="Take a Note."
                type="text"
                autoComplete="current-password"
                variant="outlined"
                multiline
                rows={expand?2:1}
                name="content"
                value={note.content}
                onChange={inputEvent}
                onClick={expandIt}
                style={{width:"80%"}}
                

              />
              {expand?<Fab color="primary" aria-label="add" className={classes.fab} onClick={addEvent} >
                <AddIcon  />
              </Fab>:null}
            </form>




      </div>
    </>
  );
}

export default Createnote;