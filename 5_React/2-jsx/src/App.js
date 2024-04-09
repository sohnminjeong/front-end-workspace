import { useState } from "react";
// useState는 자동 렌더링이 포함되어 있음

const App = () => {
  const [counter, setCounter] = useState(0); // 해당하는 초기 변수, 변화시키는 함수

  const setCount = () => {
    setCounter(counter + 1); // 원래값에 +1한 값을 counter에 넣겠다!
    // counter = counter+1;
  };

  return (
    <div>
      <h1>Total Clicks : {counter}</h1>
      <button onClick={setCount}>Click!</button>
    </div>
  );
};

export default App;
