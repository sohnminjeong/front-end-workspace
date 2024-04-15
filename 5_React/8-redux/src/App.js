import Header from "./components/Header";
import { increase, decrease } from "./store/counter";
// useDispath가 있어야 만들어둔 increase, decrease 호출하여 사용 가능
// import { useSelector, useDispatch } from "react-redux";
import { useDispatch } from "react-redux";

// toolkit 사용 전
const App = () => {
  // const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      {/* <h1>Total clicks : {counter}</h1> */}
      <Header />
      <button onClick={() => dispatch(increase())}>+1</button>
      <button onClick={() => dispatch(decrease())}>-1</button>
    </>
  );
};
export default App;
// toolkit 사용 후
