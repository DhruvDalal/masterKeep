import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) =>({
  root: {
    minWidth:300,
    maxWidth: 300,
    maxHeight:250,
    display: 'flex',
    flexDirection:"column",
    flexWrap:"wrap",
    
    margin:"10px",
    boxShadow:"2px 2px 2px 2px rgba(0,0,0,0.5)"
  },
  fab: {
    position: 'relative',
    bottom: theme.spacing(-0.5),
    right: theme.spacing(-25.5),
    height: "50px",
    width: "50px",
    zIndex:"1",
  },
 
  title: {
    fontSize: 20,
  },
  p:{
    width:"100%",
    height:"90px",
    overflowY:"scroll",
  }
}));

function Notes(props) {

  
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>
      <CardContent >
       <h1 className={classes.title}>{props.title}</h1>
       <br/>
       
       <p className={classes.p}>{props.content} </p>
      </CardContent>
      <CardActions >
      <Fab color="primary" aria-label="add" className={classes.fab} onClick={()=>{
            props.onSelect(props.id)}}>
      <DeleteOutlineIcon />
              </Fab>
      </CardActions>
      
    </Card>
  );
}

export default Notes;
