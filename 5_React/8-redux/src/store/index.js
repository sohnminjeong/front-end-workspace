// [toolkit 사용 전]
//import { combineReducers } from "redux";
//import counter from "./counter";

// const store = combineReducers({
//   counter,
// });
// export default store;

// [toolkit 사용 후]
import { configureStore } from "@reduxjs/toolkit"; // toolkit 사용 위해
import counter from "./counter";

const store = configureStore({
  reducer: { counter: counter.reducer },
});

export default store;
