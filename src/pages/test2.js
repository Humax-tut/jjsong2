import React, {useState} from "react";

function Test2(props) {
  
  let cnt = 0;
  const [state, setState] = useState(props.user+'~'+(cnt));

  const showMessage = () => {
    alert('Followed ' + props.user);
  };

  const handleClick = () => {
    cnt = cnt + 1;
    const userInfo = props.user+'_'+(cnt);
    setState(userInfo);
    setTimeout(showMessage, 3000);
  };

  console.log('function이 새로 랜더링?? ', state);

  return (
    <button onClick={handleClick}>Function Button.. {state}</button>
  );
}

export default Test2;
