import { useState, useEffect } from "react";
import Btn from "./Btn";

// component는 대문자로 시작
const Btn = ({ click, text }) => {
  return <button onClick={click}>{text}</button>;
};

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const plus = () => {
    setCounter(counter + 1);
  };
  const minus = () => {
    setCounter(counter - 1);
  };

  console.log("always~~");

  //useEffect는 함수 형태로 사용 : useEffect(()=>{}, [])
  // []안에 내용 없이 사용 -> 한 번만 적용
  useEffect(() => {
    console.log("useEffect!");
  }, []);

  // counter가 바뀌는 시점의 useEffect
  useEffect(() => {
    console.log("counter change~~");
  }, [counter]);

  return (
    <div>
      <h1>Total Clicks : {counter}</h1>
      {/* props */}
      <Btn click={plus} text="+1" />
      <Btn click={minus} text="-1" />
      {/* <button onClick={minus}>-1</button> */}
    </div>
  );
};

export default Counter;
