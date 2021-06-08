import React,  { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getUserAll } from "./service";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

let rows = [];

const getUserData = async () => {
    let user = [];
    try {
        user = await getUserAll();
        rows = user;
        console.log(rows);
    } catch (error) {
        //실패하면 throw new Error("") 값 출력
        window.alert(error);
    }
    return user;
};

console.log(rows);


export default function BasicTable() {
    useEffect(() => { // Update the document title using the browser API document.title = `You clicked ${count} times`; });
        console.log('1231231312');
  });
  const classes = useStyles();
  getUserData();
  return (
      <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.UserName}
              </TableCell>
              <TableCell align="right">{row.EMail}</TableCell>
              <TableCell align="right">{row.IsActive}</TableCell>
              <TableCell align="right">{row.UserID}</TableCell>
              <TableCell align="right">{row.SystemRole}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}