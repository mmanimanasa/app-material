import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PostData from "./studies.json";
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CommentIcon from '@material-ui/icons/Comment';
import Task from './Task';
const useStyles = makeStyles((theme) => ({
   
    root:{
        width: '70%',
         marginLeft: theme.spacing(6),
    },
    table: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(0),
        
         
    },
  }));




export default function AcccessibleTable() {
  const classes = useStyles();

  return (
      <div class="studies">
          <div className={classes.root}>
          
          {/* <Box  width="70%"  m={8}  > */}
  <TableContainer component={Paper}  >
    <Table className={classes.table} aria-label="caption table">
      
        {PostData.map((row) => (
          <TableRow key={row.Id}>
            <TableHead  >
               &nbsp; {row.Id} &emsp; &emsp; &thinsp; &emsp; &emsp; 
                   &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; {row.title} 
            </TableHead>
            <br></br>
            <TableBody>
            <TableCell >{row.Description} <br></br><br></br><br></br>
            <div style={{
            display: 'inline-flex',
            VerticalAlign: 'text-bottom',
            BoxSizing: 'inherit',
            textAlign: 'center',
            AlignItems: 'center',
            
            }}><CommentIcon></CommentIcon> &nbsp; 03</div>
             </TableCell>
            <TableCell></TableCell>
            </TableBody>
            
            
          </TableRow>
        ))}
      
    </Table>
  </TableContainer>
  {/* </Box> */}
  
      <br></br>
      <br></br>
      
    </div>
      </div>
      
        
        
    
  );
}
