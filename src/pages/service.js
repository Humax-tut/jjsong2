import moment from "moment";

var url = "http://localhost:4000/Users";

// 모든 회원정보 조회
export const getUserAll = async () => {
  const response = await fetch(url);

  if (response.ok) {
    const users = await response.json();
    return users;
  }
};

// 로그인
export const fetchLogin = async ({ id, password }) => {
  const response = await fetch(url);

  if (response.ok) {
    //서버통신이 성공적으로 이루어지면 users에 json값 대입
    const users = await response.json();

    //users안 객체들을 순회하면서 그 객체들의 id값과 form 컴포넌트에서 받음 account의 id값과 비교
    const user = users.find((user) => user.EMail === id);
    //일치하는 user가 없거나, 비밀번호가 틀리면 해당 에러 생성
    if (!user || user.Password !== password) {
      throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
    return user;
  }

  //서버 통신이 안이루어졌을떄
  throw new Error("서버 통신이 원할하지 않습니다.");
};

// 회원가입
export const fetchRegister = async ({ email, userName, password }) => {
  const response = await fetch(url);
  var result = "fail";
  if (response.ok) {
    //서버통신이 성공적으로 이루어지면 users에 json값 대입
    const users = await response.json();
    //이메일 중복체크
    const user = users.find((user) => user.EMail === email);
    const arr = [];
    const arr2 = [];
    users.map((user) => {
      arr.push(user.id);
      arr2.push(user.UserID);
      return true;
    });
    const maxId = Math.max(...arr) + 1;
    const maxUserID = Math.max(...arr2) + 1;

    //이메일 중복된 사람 있으면 알림창 생성
    if (user) {
      throw new Error("이미 가입된 회원입니다. 다른 이메일을 입력해주세요.");
    }
    //중복 없으면 insert
    else {
      try {
        await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: maxId,
            CustomerCompanyID: 1,
            CustomerCompanyName: "IT",
            UserID: maxUserID,
            UserName: userName,
            EMail: email,
            Password: password,
            SystemRole: "GENERAL",
            IsActive: 1,
            CreateUserID: 743,
            CreateDate: moment().format("YYYY-MM-DD HH:mm:ss"),
            UpdateUserID: null,
            UpdateDate: null,
          }),
        })
          .then((res) => {
            if (res.ok) {
              alert("생성이 완료 되었습니다");
            }
          })
          .catch(function (error) {
            // catch
            console.log("Request failed", error);
          });
        result = "success";
      } catch (error) {
        //실패하면 throw new Error("") 값 출력
        window.alert(error);
        result = "fail";
      }
    }
    return result;
  }

  //서버 통신이 안이루어졌을떄
  throw new Error("서버 통신이 원할하지 않습니다.");
};
