import React from "react";

function Test2(props) {
  
  const showMessage = () => {
    alert('call Function.. > Followed ' + props.user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return (
    <button onClick={handleClick}>Follow</button>
  );
}

export default Test2;
