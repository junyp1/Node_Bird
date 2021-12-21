export const initialState = {
  mainPost: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "juny",
      },
      content: "첫 게시글",
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
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

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
    case ADD_POST:
      return {
        ...state,
        mainPost: [dummyPost, ...state.mainPost],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
