import { logout } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import React, { useState } from 'react'
import Test from "./test"
import Test2 from "./test2"

function Main() {
  const history = useHistory();
  const dispatch = useDispatch();
// 다시 Object로 변환
  const myObject = JSON.parse(localStorage.getItem("persist:root")).user;
  const userInf = JSON.parse(myObject);
  const empname = userInf.name;
  const email = userInf.email;
  const systemrole = userInf.SystemRole;


  const Logout = () => {
    dispatch(
      logout()
    );
    history.replace("/");
  }

  const goToUserMng = () => {
    history.replace("/usermng");
  }

  const goToBoard = () => {
    history.replace("/boards");
  }

  const [user, setUser] = useState('');

  return (
    <div>
      <h1>Main 화면</h1>

      <button onClick={Logout}>로그아웃</button>
      <p>이름 : {empname}</p>
      <p>이메일 : {email}</p>
      <br/>
      {systemrole == "Role.Legal.SuperAdmin" ? <button onClick={goToUserMng}>회원 관리</button> : ""}
      <span>&nbsp;</span>
      <button onClick={goToBoard}>게시판</button>

      <br></br>
      <br></br>

      <div>
        <h4>function vs class</h4>
        <p>
          <a href="https://overreacted.io/ko/how-are-function-components-different-from-classes/" target="_blank">이론</a>
          <span>&nbsp;</span>
          <a href="https://codesandbox.io/s/pjqnl16lm7?file=/src/ProfilePageFunction.js:59-267" target="_blank">샘플</a>
        </p>
        <select value={user} onChange={e => setUser(e.target.value )}>
          <option value="Dan">Dan</option>
          <option value="Sophie">Sophie</option>
          <option value="Sunil">Sunil</option>
        </select>
        <p>
          <Test user={user} />
          <span>&nbsp;</span>
          <Test2 user={user} />
        </p>
      </div>
    </div>
  );
}

export default Main;
