import React from "react";

function Test2(props) {
  
  const showMessage = () => {
    alert('Followed ' + props.user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return (
    <button onClick={handleClick}>Function Button</button>
  );
}

export default Test2;
