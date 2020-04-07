import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Circle from './Circle';

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { colors } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root1: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: theme.spacing(-5),
    },
    hori:{
        display: 'grid',
        gridArea: 
        'cta2 cta1'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto ',
    },
    linkIcon:{
        color: 'green',
    },
    linkIcon1:{
        color: 'blue',
    },
    linkIcon2:{
        color: 'red',
    },
    linkIcon3:{
        color: 'yellow',
    }
    
  }));
  export default function MediaControlCard() {
    const classes = useStyles();
    const theme = useTheme();
    
    return (
        <div>
      <Card className={classes.root1}  >
          <div className={classes.details}>
         <CardContent className={classes.content}>
             <Grid className={classes.hori}>
             <Circle className={classes.cta2}></Circle>
             <div className={classes.cta1}>
             <Typography component="h8" variant="h8">
            CIDD03108D  &nbsp; &emsp; &emsp; Study 101
            </Typography><br></br><br></br>
            <Typography variant="subtitle3" color="textSecondary">
            Loreum ipsum dolor sit amet, consectetur adispicing elit, sid edo esumat tempor incididut ut lobear et dolore
            </Typography>
             </div>
             </Grid>
             <br></br><br></br>
            <div style={{
            display: 'inline-flex',
            VerticalAlign: 'text-bottom',
            BoxSizing: 'inherit',
            textAlign: 'center',
            AlignItems: 'center',
            
            }}>
            <AccountCircleIcon className={classes.linkIcon1}  />
                Andy G
            </div> &emsp; &emsp; &emsp;
            <div style={{
            display: 'inline-flex',
            VerticalAlign: 'text-bottom',
            BoxSizing: 'inherit',
            textAlign: 'center',
            AlignItems: 'center',
            
            }}
            >
            <CheckCircleOutlineIcon  className={classes.linkIcon}  />
                 &nbsp;ON TIME &emsp; &emsp; &emsp; &emsp; Complete by: 21-05-2020
            </div> <br></br>
          </CardContent>
          
        </div>
        
      </Card>
      <br></br><br></br>
      <Card className={classes.root1}  >
          <div className={classes.details}>
         <CardContent className={classes.content}>
            <Typography component="h8" variant="h8">
            CIDD03108D  &nbsp; &emsp; &emsp; Study 102
            </Typography><br></br><br></br>
            <Typography variant="subtitle3" color="textSecondary">
            Loreum ipsum dolor sit amet, consectetur adispicing elit, sid edo esumat tempor incididut ut lobear et dolore
            </Typography><br></br><br></br>
            <div style={{
            display: 'inline-flex',
            VerticalAlign: 'text-bottom',
            BoxSizing: 'inherit',
            textAlign: 'center',
            AlignItems: 'center',
            
            }}>
            <AccountCircleIcon className={classes.linkIcon1}  />
                Andy G
            </div> &emsp; &emsp; &emsp;
            <div style={{
            display: 'inline-flex',
            VerticalAlign: 'text-bottom',
            BoxSizing: 'inherit',
            textAlign: 'center',
            AlignItems: 'center',
            
            }}
            >
            <ErrorOutlineIcon  className={classes.linkIcon2}  />
                 &nbsp;4 Due Date Missed &emsp; &emsp; &emsp; &emsp; Complete by: 21-05-2020
            </div> <br></br>
          </CardContent>
          
        </div>
        
      </Card>
      <br></br><br></br>
      <Card className={classes.root1}  >
          <div className={classes.details}>
         <CardContent className={classes.content}>
            <Typography component="h8" variant="h8">
            CIDD03108D  &nbsp; &emsp; &emsp; Study 103
            </Typography><br></br><br></br>
            <Typography variant="subtitle3" color="textSecondary">
            Loreum ipsum dolor sit amet, consectetur adispicing elit, sid edo esumat tempor incididut ut lobear et dolore
            </Typography><br></br><br></br>
            <div style={{
            display: 'inline-flex',
            VerticalAlign: 'text-bottom',
            BoxSizing: 'inherit',
            textAlign: 'center',
            AlignItems: 'center',
            
            }}>
            <AccountCircleIcon className={classes.linkIcon1}  />
                Andy G
            </div> &emsp; &emsp; &emsp;
            <div style={{
            display: 'inline-flex',
            VerticalAlign: 'text-bottom',
            BoxSizing: 'inherit',
            textAlign: 'center',
            AlignItems: 'center',
            
            }}
            >
            <ErrorOutlineIcon  className={classes.linkIcon3}  />
                 &nbsp;1 Due Date Missed &emsp; &emsp; &emsp; &emsp; Complete by: 21-05-2020
            </div> <br></br>
          </CardContent>
          
        </div>
        
      </Card>
      </div>
    );
  }