import React , { Component } from "react";
import logo1 from './logo1.png';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Example from "./Example";
import Div from './Div';
const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    logo: {
        maxWidth: 160,
      },
      Box:{
        alignItems: 'center',
      },
      title: {
        marginTop: theme.spacing(1),
      },
      search: {
          marginLeft: theme.spacing(70),
          marginTop: theme.spacing(1),
      },
      noti:{
        marginTop: theme.spacing(1),
      },
      account:{
        marginTop: theme.spacing(1),
      },
      expand:{
        marginTop: theme.spacing(1), 
      }
    }));

    export default function PrimarySearchAppBar() {
        const classes = useStyles();
        return (
            <div className={classes.grow}>
                
                <Toolbar>
                <Box alignItems="center" display="flex">
                <Box>
                <img src={logo1} alt="logo" className={classes.logo} /> &emsp; 
                </Box>
                <Typography className={classes.title} variant="h6" noWrap>
                ACCELERATE
                </Typography>
                <SearchIcon className={classes.search}></SearchIcon> &emsp;
                <Typography className={classes.title} variant="h6" noWrap>
                Search lorem ipsm 
                </Typography> &emsp;
                <NotificationsNoneIcon className={classes.noti}></NotificationsNoneIcon> &emsp;
                <AccountCircleIcon className={classes.account}></AccountCircleIcon> &emsp;
                <ExpandMoreIcon className={classes.expand}></ExpandMoreIcon>
                </Box>
                
                {/* <p className={classes.text}>  Accelerate</p> */}
                </Toolbar>
                {/* <Typography className={classes.title} variant="h6" noWrap>
                Accelerate
                </Typography> */}
                <Div></Div>
                 
                
            </div>)
    }
    