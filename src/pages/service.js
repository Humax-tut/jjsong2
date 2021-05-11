import { isCompositeComponent } from "react-dom/test-utils";

//동기식 방식 ( async await 사용!!!!!)
export const fetchLogin = async ({ id, password }) => {
  const response = await fetch("http://localhost:4000/Users");

  if (response.ok) {
    //서버통신이 성공적으로 이루어지면 users에 json값 대입
    const users = await response.json();

    //users안 객체들을 순회하면서 그 객체들의 id값과 form 컴포넌트에서 받음 account의 id값과 비교
    //서로 일치하는 것만 user에 대입
    const user = users.find((user) => user.EMail === id);
    //일치하는 user가 없거나, 비밀번호가 틀리면 해당 에러 생성
    if (!user || user.Password !== password) {
      throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.");
    }

    //모든게 일치하면 그 user 정보 return -> 이 return값이 form 컴포넌트 내 fetchLogin 함수 값으로 출력되는것
    //form 컴포넌트에서 setUser값에 넣어야함
    return user;
  }

  //서버 통신이 안이루어졌을떄
  throw new Error("서버 통신이 원할하지 않습니다.");
};

export const fetchRegister = async ({ email, userName, password }) => {
  const response = await fetch("http://localhost:4000/Users");

  if (response.ok) {
    //서버통신이 성공적으로 이루어지면 users에 json값 대입
    const users = await response.json();

    //이메일 중복체크
    const user = users.find((user) => user.EMail === email);
    const arr = [];
    users.map((user) => {
      arr.push(user.UserID);
    });
    let maxId = Math.max(...arr) + 1;

    //이메일 중복된 사람 있으면 알림창 생성
    if (user) {
      throw new Error("이미 가입된 회원입니다. 다른 이메일을 입력해주세요.");
    }
    //중복 없으면 insert

    //모든게 일치하면 그 user 정보 return -> 이 return값이 form 컴포넌트 내 fetchLogin 함수 값으로 출력되는것
    //form 컴포넌트에서 setUser값에 넣어야함
    return user;
  }

  //서버 통신이 안이루어졌을떄
  throw new Error("서버 통신이 원할하지 않습니다.");
};