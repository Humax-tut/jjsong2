import React, { useState } from "react";
import { fetchRegister } from "./service";
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
      //...을 이용하여 account의 복사본을 만들고
      //input에 지정한 네임 속성에 해당 value 값을 넣어 오버라이딩!
      //console.log(account)를 찍어보고 입력한 값들이 account에 출력되면 성공!!
      setAccount({
          ...account,
          [e.target.name]: e.target.value,
      });
  };

  //동기식으로 로그인정보를 통신하여 출력
  const onSubmitAccount = async () => {
      try {
          const user = await fetchRegister(account);

          //성공하면 해당 url로 이동(main페이지로)
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
