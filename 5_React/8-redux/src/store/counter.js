// [toolkit 사용 전]
// import { createAction, handleActions } from "redux-actions";

// // 액션(Actions) : 프로젝트의 상태에 변화를 일으키는 것
// const INCREASE = "counter/INCREASE";
// const DECREASE = "counter/DECREASE";

// // 액션 생성 함수(action creator) : 액션 객체를 만들어주는 함수
// //export const increase = () => ({ type: INCREASE });
// export const increase = createAction(INCREASE); // 액션 생성함수 만들어짐
// export const decrease = createAction(DECREASE);

// // 리듀서(reducer) : 변화를 일으키는 함수
// const counter = handleActions(
//   {
//     [INCREASE]: (state, action) => state + 1,
//     [DECREASE]: (state, action) => state - 1,
//   },
//   0
//   // 액션을 어떻게 다룰건지, 초기값
// );

// export default counter;

// [toolkit 사용 후]
import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counterSlice",
  initialState: 0, // 초기값
  reducers: {
    // increase, decrease 정의
    increase: (state, action) => {
      return state + 1;
    },
    decrease: (state, action) => {
      return state - 1;
    },
  },
});

export default counter;
export const { increase, decrease } = counter.actions;
