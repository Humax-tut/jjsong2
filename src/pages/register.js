import React, { useState } from "react";
import { fetchRegister } from "../service";
import { useHistory } from "react-router-dom";

function Register() {

  const history = useHistory();

  //input에서 입력한 아이디와 비밀번호 정보를 담기위한 state
  const [account, setAccount] = useState({
    email: "",
    userName: "",
    password: ""
  });

  //input에 입력하면 자동적으로 account state값 변경
  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitAccount = async () => {
    try {
      const result = await fetchRegister(account);
      //성공하면 해당 url로 이동(로그인 페이지로 이동)
      if (result == "success") {
        history.replace("/login");
      }
      else {
        alert(result);
      }
    } catch (error) {
      //실패하면 throw new Error("") 값 출력
      window.alert(error);
    }
  };

  const goToLogin = () => {
    history.replace("/login");
  }

  return (
    <div>
      <h1>Register</h1>
      <input
        id="EMail"
        name="email"
        placeholder="이메일을 입력해주세요"
        onChange={onChangeAccount}
      />
      <input
        id="userName"
        name="userName"
        placeholder="이름을 입력해주세요"
        onChange={onChangeAccount}
      />
      <input
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={onChangeAccount}
      />
      <button onClick={onSubmitAccount}>회원가입</button>
      <button onClick={goToLogin}>로그인 이동</button>
    </div>
  );
}

export default Register;
