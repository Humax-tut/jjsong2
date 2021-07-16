import React, { useEffect, useState } from "react";
import { getUserbyId, setUserName } from "../service";
import queryString from "query-string";
import { Button } from "@material-ui/core";

function Usermng_View(props) {
  const [a, setState] = useState({
    id: "",
    UserName: "",
    EMail: "",
  });

  const { search } = props.location;
  const queryObj = queryString.parse(search); // 문자열의 쿼리스트링을 Object로 변환
  let queryid = queryObj.id;

  const getdata = async () => {
    let userdata = await getUserbyId(queryid);
    setState({
      id: userdata.id,
      UserName: userdata.UserName,
      EMail: userdata.EMail,
      IsActive: userdata.IsActive,
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  const onChange = (e) => {
    setState({
      id: a.id,
      UserName: e.target.value,
      EMail: a.EMail,
      IsActive: a.IsActive,
    });
  };

  const onChangeActive = (e) => {
    setState({
      id: a.id,
      UserName: a.UserName,
      EMail: a.EMail,
      IsActive: e.target.value,
    });
  };

  const UpdateUser = async () => {
    let result =  await setUserName(a.id, a.UserName, a.IsActive);
    if(result == "success") {
      window.opener.location.reload();
      window.close();
    }
    else {
      alert(result);
    }
  };

  const close = () => {
    window.close();
  }

  return (
    <div>
      <h1>상세 정보</h1>
      <table style={{ border: "1px solid black" }}>
        <tbody>
          <tr>
            <th>사용자ID</th>
            <td>{a.id}</td>
          </tr>
          <tr>
            <th>사용자명</th>
            <td>
              <input type="text" value={a.UserName} onChange={onChange}></input>
            </td>
          </tr>
          <tr>
            <th>활성화여부</th>
            <td>
              <label>
                <input
                  type="radio"
                  name="rdoIsActive"
                  id="IsActiveT"
                  onChange={onChangeActive}
                  value="1"
                  checked={a.IsActive == 1 ? true : false}
                ></input>
                활성화
              </label>
              <label>
                <input
                  type="radio"
                  name="rdoIsActive"
                  id="IsActiveF"
                  onChange={onChangeActive}
                  value="0"
                  checked={a.IsActive != 1 ? true : false}
                ></input>
                비활성화
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={UpdateUser}>저장하기</button>
      <button onClick={close}>닫기</button>
    </div>
  );
}

export default Usermng_View;
