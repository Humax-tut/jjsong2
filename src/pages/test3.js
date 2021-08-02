import React, {useState} from "react";

function Counter() {
    const [number, setNumber] = useState(0);
    console.log('A : ' + number);
  
    const onIncreaseTime = () => {
      console.log('B : ' + number);
    }
  
    const onIncrease = () => {
      console.log('C : ' + number);
  
      setNumber(prevNumber => prevNumber + 1);
      setTimeout(onIncreaseTime, 0);  
  
      console.log('D : ' + number);
    }
  
    console.log('E : ' + number);
  
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
      </div>
    );
  }

export default Counter;
