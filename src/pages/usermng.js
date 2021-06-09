import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getUserAll } from "./service";

const useStyles = {
  table: {
    minWidth: 650,
    maxWidth: 1200,
    margin: "auto",
  },
};

let rows = [];

class BasicTable extends Component {
  getUserData = async () => {
    rows = await getUserAll();
    this.setState({ rows });
  };

  componentWillMount() {
    this.getUserData();
  }

  goToMain() {
    window.location.replace("/main");
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2>회원 관리</h2>
        <button onClick={this.goToMain}>메인화면 이동</button>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>이름</TableCell>
                <TableCell align="right">이메일</TableCell>
                <TableCell align="right">활성화</TableCell>
                <TableCell align="right">UserID</TableCell>
                <TableCell align="right">권한</TableCell>
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
}

export default withStyles(useStyles)(BasicTable);