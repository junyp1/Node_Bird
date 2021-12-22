export const initialState = {
  mainPost: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "juny",
      },
      content: "첫 게시글 #hashtag #포스트",
      Images: [
        {
          src: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202004/28/121a78f5-eecb-4942-a585-51f32dae2085.jpg",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Levi%2C_Kittila_-_Finland_-_panoramio_-_aristidov_%287%29.jpg/300px-Levi%2C_Kittila_-_Finland_-_panoramio_-_aristidov_%287%29.jpg",
        },
        {
          src: "https://dimg.donga.com/wps/NEWS/IMAGE/2020/05/06/100843406.7.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "gildong",
          },
          content: "wow",
        },
        {
          User: {
            nickname: "chulsoo",
          },
          content: "nice",
        },
      ],
    },
  ],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

const dummyPost = {
  id: 2,
  content: "dummy contents",
  User: {
    id: 1,
    nickname: "dumdum",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPost: [dummyPost, ...state.mainPost],
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
