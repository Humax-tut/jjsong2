import React, { useState } from "react";
import { fetchLogin } from "./service";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
    //글로벌 전역 상태값 setUser를 받아옴
    const [user, setUser] = useState(null)
    //url 이동을 위한 useHistory
    const history = useHistory();
    const dispatch = useDispatch();

    //input에서 입력한 아이디와 비밀번호 정보를 담기위한 state
    const [account, setAccount] = useState({
        id: "",
        password: "",
    });

    //input에 입력하면 자동적으로 account state값 변경
    const onChangeAccount = (e) => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
    };

    //동기식으로 로그인정보를 통신하여 출력
    const onSubmitAccount = async () => {
        try {
            const user = await fetchLogin(account);
            //성공하면 해당 user 아이디 패스워드값 셋팅
            setUser(user);
            //성공하면 해당 url로 이동(main페이지로)
            handleSubmit(user);
            window.location.replace("/main")
        } catch (error) {
            //실패하면 throw new Error("") 값 출력
            window.alert(error);
        }
    };

    const handleSubmit = (user) => {
        dispatch(
            login({
              name: user.UserName,
              email: user.EMail,
              password: user.Password,
              loggedIn: true,
            })
          );
    }

    const goToRegister = () => {
        history.replace("/register");
    }
    return (
        <div>
            <input
                id="id"
                name="id"
                placeholder="아이디를 입력해주세요"
                onChange={onChangeAccount}
            />
            <input
                id="password"
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                onChange={onChangeAccount}
            />
            <button onClick={onSubmitAccount}>로그인</button>
            <button onClick={goToRegister}>회원가입</button>
        </div>
    );
}

export default Login;