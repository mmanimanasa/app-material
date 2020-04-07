import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Circle from './Circle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxHeight: 350,
    maxWidth: 620,
    marginLeft: theme.spacing(-5),
  },
  gri:{
    marginLeft: theme.spacing(1),
  },
  icons:{
      marginLeft: theme.spacing(-8),
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
    color: 'orange',
    }
  
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid className={classes.gri} container spacing={2}>
          <Grid item>
            <Circle></Circle>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                CIDD03108D  &nbsp; &emsp; &emsp; Study 101
                </Typography>
                <Typography variant="body2" gutterBottom>
                Loreum ipsum dolor sit amet, consectetur adispicing elit, sid edo esumat tempor incididut ut lobear et dolore
                </Typography>
              </Grid><br></br>
              <Grid item className={classes.icons}>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                <div style={{
            display: 'inline-flex',
            VerticalAlign: 'text-bottom',
            BoxSizing: 'inherit',
            textAlign: 'center',
            AlignItems: 'center',
            
            }}>
            <AccountCircleIcon className={classes.linkIcon1}  />
                Andy G
            </div>
             &emsp; &emsp; &emsp;
            <div style={{
            display: 'inline-flex',
            VerticalAlign: 'text-bottom',
            BoxSizing: 'inherit',
            textAlign: 'center',
            AlignItems: 'center',
            
            }}
            >
            <CheckCircleOutlineIcon  className={classes.linkIcon}  />
                 &nbsp;ON TIME  &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Complete by: 21-05-2020
            </div><br></br>
                </Typography>
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </Paper> <br></br><br></br><br></br>
      <Paper className={classes.paper}>
        <Grid container className={classes.gri} spacing={2}>
          <Grid item>
            <Circle></Circle>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                CIDD03108D  &nbsp; &emsp; &emsp; Study 101
                </Typography>
                <Typography variant="body2" gutterBottom>
                Loreum ipsum dolor sit amet, consectetur adispicing elit, sid edo esumat tempor incididut ut lobear et dolore
                </Typography>
              </Grid><br></br>
              <Grid item className={classes.icons}>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                <div style={{
            display: 'inline-flex',
            VerticalAlign: 'text-bottom',
            BoxSizing: 'inherit',
            textAlign: 'center',
            AlignItems: 'center',
            
            }}>
            <AccountCircleIcon className={classes.linkIcon1}  />
                Andy G
            </div>
             &emsp; &emsp; &emsp;
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
            </div><br></br>
                </Typography>
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </Paper><br></br><br></br><br></br>
      <Paper className={classes.paper}>
        <Grid container className={classes.gri} spacing={2}>
          <Grid item>
            <Circle></Circle>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                CIDD03108D  &nbsp; &emsp; &emsp; Study 101
                </Typography>
                <Typography variant="body2" gutterBottom>
                Loreum ipsum dolor sit amet, consectetur adispicing elit, sid edo esumat tempor incididut ut lobear et dolore
                </Typography>
              </Grid> <br></br>
              <Grid item className={classes.icons}>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                <div style={{
            display: 'inline-flex',
            VerticalAlign: 'text-bottom',
            BoxSizing: 'inherit',
            textAlign: 'center',
            AlignItems: 'center',
            
            }}>
            <AccountCircleIcon className={classes.linkIcon1}  />
                Andy G
            </div>
             &emsp; &emsp; &emsp;
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
            </div><br></br>
                </Typography>
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
