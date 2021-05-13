import { logout } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Main() {
  const history = useHistory();
  const dispatch = useDispatch();

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
    </div>
  );
}

export default Main;
