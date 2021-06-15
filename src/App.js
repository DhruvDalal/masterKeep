import {React,useState,useEffect} from "react";
import Header from "./Header";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SideMenu from "./SideMenu";
import Createnote from "./Createnote";
import Notes from "./Notes";
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';


import './App.css';
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  crnote: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection:"column",
    paddingTop:"50px"
  },
  card: {
    marginTop:"20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  notesList: {
    
    margin: "50px",
  },
  icon:{
    color:"grey",
    fontSize:'750%',
  }

}));

const getLocalItems = () => {
  let list = localStorage.getItem('lists');
  if(list){
      return JSON.parse(localStorage.getItem('lists'));
  }
  else{
      return[];
  }
}

const  App = () =>{
 
  const [addItem , setItem] =useState(getLocalItems());
  const addNote = (note) =>{
    setItem((oldData)=>{
return [...oldData , note]
    })
  } ;
  useEffect(()=>{
    localStorage.setItem('lists',JSON.stringify(addItem))
  },[addItem])
  const deleteItem = (id) => {
    console.log("deleted");
    setItem((olditems) => {
      return olditems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={0} >
          <Grid item xs={12}>
            <Header />
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={0} >
          <Grid item xs={2}>
            <SideMenu />
          </Grid>
          <Grid item xs={10} className={classes.crnote} >
            <Createnote  passNote={addNote}/>
            <Grid container spacing={0} className={classes.card}>
            {addItem.length!==0?
              addItem.map((value,index)=>{
                 return (<Notes 
                   key={index}
                   id={index}
                    title ={value.title}
                    content ={value.content}
                    onSelect={deleteItem}
                 />);
              }): < div style={{display:"flex",flexDirection:"column",justifyContent: "center",
    alignItems: "center"}}>

              <EmojiObjectsIcon className={classes.icon}/>
              <h1 style={{color:"grey"}}>Notes you add appear here</h1></div>}


            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
