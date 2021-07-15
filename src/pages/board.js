import React, { Component } from "react";
import { withStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from "@material-ui/core/Paper";
import { getUserAll } from "./service";

// 커스텀 스타일
const useStyles = {
  table: {
    minWidth: 650,
    maxWidth: 1200,
    margin: "auto",
  },
  title: {
    minWidth: 650,
    maxWidth: 1200,
    margin: "auto",
    paddingBottom: '30px',
  },
  searchArea: {
    minWidth: 650,
    maxWidth: 1200,
    margin: "auto",
    border: '1px solid gray',
    padding: '10px',
  },
  selectBox: {
    width: '300px',
    marginRight: '10px',
  }
};

const Activeoptions = [
  { value: '', label: '전체' },
  { value: '1', label: '활성화' },
  { value: '0', label: '비활성화' },
];


class BasicTable extends Component {
  
  state = {
    selectedOption: '',
    searchText: '',
    isChanged: false,
    rows: [],
  };

  // lifecycle, 
  componentDidMount() {
    this.setState({ isChanged: true });
  }

  // lifecycle, 회원정보 불러온 뒤 렌더링
  componentDidUpdate() {
    if (this.state.isChanged) {
      this.getUserData();
      this.setState({ isChanged: false });
    }
  }

  // 메소드
  getUserData = async () => {
    const rowss = await getUserAll(this.state);
    this.setState({ rows: rowss });
  };

  goToMain() {
    window.location.replace("/main");
  }

  goToDetail(a) {
    window.open('/usermng_view?id=' + a, 'User_Mng', "width=900,height=600");
  }
  
  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ selectedOption: event.target.value, isChanged: true });
  };

  onChangeSearchText = searchText => {
    this.setState({ searchText: searchText.target.value, isChanged: true });
  }

  render() {
    const { selectedOption } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.title}>
          <h2>게시판</h2>
          <button onClick={this.goToMain}>메인화면 이동</button>
        </div>
        <div>
          <div className={classes.searchArea}>
            <Select className={classes.selectBox} value={selectedOption} onChange={this.handleChange} >
              {Activeoptions.map((option) => (
                  <MenuItem key={option.value} value={option.value} >
                    {option.label}
                  </MenuItem>
                ))}
            </Select>
            <input type='text' id='txtSearch' placeholder='이름, 이메일, UserID...' onChange={this.onChangeSearchText}></input>
          </div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>이름</TableCell>
                  <TableCell align="center">이메일</TableCell>
                  <TableCell align="center">활성화</TableCell>
                  <TableCell align="center">UserID</TableCell>
                  <TableCell align="center">권한</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row" onClick={() => this.goToDetail(row.id)} >
                      {row.UserName}
                    </TableCell>
                    <TableCell align="center">{row.EMail}</TableCell>
                    <TableCell align="center">{row.IsActive == 1 ? "활성화" : "비활성화"}</TableCell>
                    <TableCell align="center">{row.UserID}</TableCell>
                    <TableCell align="center">{row.SystemRole}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(BasicTable);