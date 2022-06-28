//redux store 생성
import { configureStore, createSlice } from "@reduxjs/toolkit";
//state 생성 = useState
let author = createSlice({
  name: "author",
  initialState: { name: "지흐", engname: "zzzzych" },

  //state 수정
  //1. 수정함수 만들기
  reducers: {
    //수정함수
    //state = 기존 state
    editAuthor(state, action) {
      // return {name: "지환", engname:"zzzzych"};
      state.name = "지환";
      state.engname = action.payload;
    },
  },
});
let trueFalse = createSlice({
  name: "truefalse",
  initialState: true,

  reducers: {
    transBoolean() {
      return !trueFalse;
    },
  },
});

export let { transBoolean } = trueFalse.actions;

//2.수정함수 내보내기
export let { editAuthor } = author.actions; //{함수명, 함수명1}

let test = createSlice({
  name: "testState",
  initialState: [
    {
      id: 0,
      content: "이렇게도 가능",
    },
    {
      id: 1,
      content: "배열, 객체 가능, 리덕스 예시",
    },
  ],
});
export default configureStore({
  reducer: {
    //state 등록 작명.reducer
    author: author.reducer,
    test: test.reducer,
    trueFalse: trueFalse.reducer,
    // loading: looading.reducer
  },
});
