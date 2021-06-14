import React, { useEffect, useState } from "react";
import { getUserbyId } from "./service";


function Usermng_View() {
  const [a, setState] = useState({
    id: '',
    UserName: '',
    EMail: '',
  });

  const getdata = async () => {
    let userdata = await getUserbyId(2);
    console.log(userdata);
    setState({id : userdata.id, UserName : userdata.UserName, EMail : userdata.EMail});
    
  };

  useEffect(() => {
      getdata();
  }, []);


  return (
    <div>
      <h1>dddd</h1>
      <p>{a.id}</p>
      <p>{a.UserName}</p>
    </div>
  );
}

export default Usermng_View;
