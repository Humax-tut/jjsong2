import React, { useEffect, useState } from "react";
import { getUserbyId, setUserName } from "./service";
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
    })
  };

  const UpdateUser= async () => {
    let userdata = await setUserName(a.id, a.UserName);
  };

  return (
    <div>
      <h1>상세 정보</h1>
      <table>
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
        </tbody>
      </table>
      <button onClick={UpdateUser}>저장하기</button>
    </div>
  );
}

export default Usermng_View;
