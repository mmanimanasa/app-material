import React , { Component } from "react";
import '../CSS/example.css';
import Table from '@material-ui/core/Table';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { sizing } from '@material-ui/system';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
const useStyles = makeStyles((theme) => ({
    Grid: {
        alignItems: 'center',
        alignContent: 'center',
    },
    Box:{
        alignItems: 'center',
        marginLeft: theme.spacing(40),
        
      },
    table: {
         align: 'center',
         
    },
  }));


  export default function SimpleTable() {
    const classes = useStyles();
    return (
        <Grid container justify = "center">
            <Box  width="75%" >
            <TableContainer component={Paper} >
            <Table className={classes.table} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell><h3>Loreum ipsum 00%  &nbsp;<ArrowUpwardRoundedIcon/></h3></TableCell>
                <TableCell ><h3>Loreum ipsum 00%</h3></TableCell>
                <TableCell ><h3>Loreum ipsum 00%</h3></TableCell>
                <TableCell ><h3>Loreum ipsum 00%</h3></TableCell>
                <TableCell ><h3>Loreum ipsum 00%</h3></TableCell>
                <TableCell ><h3>Loreum ipsum 00%</h3></TableCell>
            </TableRow>
            </TableHead>
            </Table>
            </TableContainer>
            </Box>
            </Grid>
            
            
        
    );
}