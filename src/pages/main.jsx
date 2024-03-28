import React, {useState, useEffect} from "react";


export default function Main() {
    const [count, setCount] = React.useState(0);
  
    const handleClick1 = () => {
      setCount(count + 1);
    };
  
    const handleClick2 = () => {
      setCount(count - 1);
    };
  
    return (
      <div>
        <h1>버튼 두 개</h1>
        <p>카운트: {count}</p>
        <button onClick={handleClick1}>+</button>
        <button onClick={handleClick2}>-</button>
      </div>
    );
  }

  