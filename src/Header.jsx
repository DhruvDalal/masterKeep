import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import PersonIcon from '@material-ui/icons/Person';
import AppsIcon from '@material-ui/icons/Apps';
import ReplayIcon from '@material-ui/icons/Replay';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
      flexGrow: 1,
     
      
      
    },
    appbar:{
        background: 'white',
        boxShadow:'none',
        display:"flex",
        flexWrap:"wrap"
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color:'grey',
    },
    logo:{
        marginRight: theme.spacing(1),
        color:'orange',
        
    },
    logo2:{
        
    },
    size:{
        fontSize:'150%',
    },
    size2:{
        color:'grey', 
    },
    title: {
      flexGrow: 1,
      color:'grey',
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      paddingBottom:'5px',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'rgb(241,243,244)',
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.80),
      },
      marginLeft: '0%',
      marginRight:'270px',
      width: '100',
      height:'90%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0,2),
      height: '100%',
      color:'grey',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(2, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      color:'grey',
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '60ch',
        '&:focus': {
          width: '70ch',
        },
      },
    },
  }));
  
  
  function Header() {
    const classes = useStyles();
  return (
    <>
         <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
            
          </IconButton>
          <IconButton
            edge="start"
            className={classes.logo}
            color="inherit"
            aria-label="open drawer"
          >
            <DescriptionIcon className={classes.size}/>
            
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Keep
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          
          <IconButton
            edge="start"
            className={classes.logo2}
            color="inherit"
            aria-label="open drawer"
            style={{marginRight:'10px'}}
          >
            <ReplayIcon className={classes.size2}/>
            
          </IconButton>
          <IconButton
            edge="start"
            className={classes.logo2}
            color="inherit"
            aria-label="open drawer"
            style={{marginRight:'10px'}}
          >
            <FormatListBulletedRoundedIcon className={classes.size2}/>
            
          </IconButton>
          <IconButton
            edge="start"
            className={classes.logo2}
            color="inherit"
            aria-label="open drawer"
            style={{marginRight:'30px'}}
          >
            <SettingsOutlinedIcon className={classes.size2}/>
            
          </IconButton>
          <IconButton
            edge="start"
            className={classes.logo2}
            color="inherit"
            aria-label="open drawer"
            style={{marginRight:'5px'}}
          >
            <AppsIcon className={classes.size2} fontSize='small'/>
            
          </IconButton>
          <IconButton
            edge="start"
            className={classes.logo2}
            color="inherit"
            aria-label="open drawer" style={{marginRight:'5px'}}
          >
            <PersonIcon className={classes.size2}/>
            
          </IconButton>
        </Toolbar>
      </AppBar>
      </div>
    </>
  );
}

export default Header;