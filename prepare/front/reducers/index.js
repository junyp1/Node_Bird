import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  user: {},
  post: {},
};

export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

export const loginoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};

//액션은 객체

//action creator
const changeNickname = (data) => {
  return {
    type: "CHANGE_NICKNAME",
    data,
  };
};

changeNickname("Good");

//(이전상태, 액션) => 다음상태
//리듀서를 거치고 나면 초기 state와는 다른 객체가 만들어짐
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return { ...state, ...action.payload };
    case "LOG_IN":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      };
    case "LOG_OUT":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
