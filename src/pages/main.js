import { logout } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Main() {
  const history = useHistory();
  const dispatch = useDispatch();
// 다시 Object로 변환
  const myObject = JSON.parse(localStorage.getItem("persist:root")).user;
  const userInf = JSON.parse(myObject);
  console.log(myObject);

  // const empname = userInf.name;
  // const email = userInf.email;

  const Logout = () => {
    dispatch(
      logout()
    );
    history.replace("/");
  }

  return (
    <div>
      <h1>Main 화면</h1>

      <button onClick={Logout}>로그아웃</button>
      {/* <p>이름 : {empname}</p>
      <p>이메일 : {email}</p> */}
    </div>
  );
}

export default Main;
