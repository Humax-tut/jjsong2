import React, { useState } from "react";
import { fetchLogin } from "./service";
import { useHistory } from "react-router-dom";

function Login() {
    //글로벌 전역 상태값 setUser를 받아옴
    //로그인이 성공적으로 이루어지면 user에 상태값을 넣어줘야지 나중에 다른 컴포넌트에서도 user값을 이용하여 다른 것들을 할 수 있음
    //const { setUser } = useUserContext();
    const [user, setUser] = useState(null)
    //url 이동을 위한 useHistory
    const history = useHistory();

    //input에서 입력한 아이디와 비밀번호 정보를 담기위한 state
    const [account, setAccount] = useState({
        id: "",
        password: "",
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
            const user = await fetchLogin(account);
            console.log(user);
            //성공하면 해당 user 아이디 패스워드값 셋팅
            setUser(user);
            //성공하면 해당 url로 이동(main페이지로)
            alert('hi');
            //history.replace("/");
        } catch (error) {

            //실패하면 throw new Error("") 값 출력
            window.alert(error);
        }
    };
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
        </div>
    );
}

export default Login;