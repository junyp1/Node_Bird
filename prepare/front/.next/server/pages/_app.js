module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "C:\\Users\\JH-Ma\\react-nodebird\\prepare\\front\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





react__WEBPACK_IMPORTED_MODULE_3___default.a.useLayoutEffect = react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect;

const NodeBird = ({
  Component
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "NodeBird")), __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }));
};

NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(NodeBird));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");



 //액션은 객체
//(이전상태, 액션) => 다음상태
//리듀서를 거치고 나면 초기 state와는 다른 객체가 만들어짐

const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log("HYDRATE", action);
      return action.payload;

    default:
      {
        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, REMOVE_IMAGE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_POST_ONE_REQUEST, LOAD_POST_ONE_SUCCESS, LOAD_POST_ONE_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_ONE_REQUEST", function() { return LOAD_POST_ONE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_ONE_SUCCESS", function() { return LOAD_POST_ONE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_ONE_FAILURE", function() { return LOAD_POST_ONE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_REQUEST", function() { return UPDATE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_SUCCESS", function() { return UPDATE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_FAILURE", function() { return UPDATE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");

const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePost: true,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadUserPostsLoading: false,
  loadUserPostsDone: false,
  loadUserPostsError: null,
  loadHashtagPostsLoading: false,
  loadHashtagPostsDone: false,
  loadHashtagPostsError: null,
  loadPostOneLoading: false,
  loadPostOneDone: false,
  loadPostOneError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  updatePostLoading: false,
  updatePostDone: false,
  updatePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null,
  singlePost: null
};
const REMOVE_IMAGE = "REMOVE_IMAGE";
const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";
const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";
const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";
const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";
const LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST";
const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";
const LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE";
const LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAG_POSTS_REQUEST";
const LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAG_POSTS_SUCCESS";
const LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAG_POSTS_FAILURE";
const LOAD_POST_ONE_REQUEST = "LOAD_POST_ONE_REQUEST";
const LOAD_POST_ONE_SUCCESS = "LOAD_POST_ONE_SUCCESS";
const LOAD_POST_ONE_FAILURE = "LOAD_POST_ONE_FAILURE";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const UPDATE_POST_REQUEST = "UPDATE_POST_REQUEST";
const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
const UPDATE_POST_FAILURE = "UPDATE_POST_FAILURE";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
const RETWEET_REQUEST = "RETWEET_REQUEST";
const RETWEET_SUCCESS = "RETWEET_SUCCESS";
const RETWEET_FAILURE = "RETWEET_FAILURE";
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
  switch (action.type) {
    case REMOVE_IMAGE:
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      break;

    case RETWEET_REQUEST:
      draft.retweetLoading = true;
      draft.retweetDone = false;
      draft.retweetError = null;
      break;

    case RETWEET_SUCCESS:
      {
        draft.retweetLoading = false;
        draft.retweetDone = true;
        draft.mainPosts.unshift(action.data);
        break;
      }

    case RETWEET_FAILURE:
      draft.retweetLoading = false;
      draft.retweetError = action.error;
      break;

    case UPLOAD_IMAGES_REQUEST:
      draft.uploadImagesLoading = true;
      draft.uploadImagesDone = false;
      draft.uploadImagesError = null;
      break;

    case UPLOAD_IMAGES_SUCCESS:
      {
        draft.imagePaths = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      }

    case UPLOAD_IMAGES_FAILURE:
      draft.uploadImagesLoading = false;
      draft.uploadImagesError = action.error;
      break;

    case LIKE_POST_REQUEST:
      draft.likePostLoading = true;
      draft.likePostDone = false;
      draft.likePostError = null;
      break;

    case LIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers.push({
          id: action.data.UserId
        });
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;
      }

    case LIKE_POST_FAILURE:
      draft.likePostLoading = false;
      draft.likePostError = action.error;
      break;

    case UNLIKE_POST_REQUEST:
      draft.unlikePostLoading = true;
      draft.unlikePostDone = false;
      draft.unlikePostError = null;
      break;

    case UNLIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        break;
      }

    case UNLIKE_POST_FAILURE:
      draft.unlikePostLoading = false;
      draft.unlikePostError = action.error;
      break;

    case LOAD_POST_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      break;

    case LOAD_POST_SUCCESS:
      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      draft.mainPosts = draft.mainPosts.concat(action.data);
      draft.hasMorePost = action.data.length === 10;
      break;

    case LOAD_POST_FAILURE:
      draft.loadPostLoading = false;
      draft.loadPostError = action.error;
      break;

    case LOAD_USER_POSTS_REQUEST:
      draft.loadUserPostsLoading = true;
      draft.loadUserPostsDone = false;
      draft.loadUserPostsError = null;
      break;

    case LOAD_USER_POSTS_SUCCESS:
      draft.loadUserPostsLoading = false;
      draft.loadUserPostsDone = true;
      draft.mainPosts = draft.mainPosts.concat(action.data);
      draft.hasMorePost = action.data.length === 10;
      break;

    case LOAD_USER_POSTS_FAILURE:
      draft.loadUserPostsLoading = false;
      draft.loadUserPostsError = action.error;
      break;

    case LOAD_HASHTAG_POSTS_REQUEST:
      draft.loadHashtagPostsLoading = true;
      draft.loadHashtagPostsDone = false;
      draft.loadHashtagPostsError = null;
      break;

    case LOAD_HASHTAG_POSTS_SUCCESS:
      draft.loadHashtagPostsLoading = false;
      draft.loadHashtagPostsDone = true;
      draft.mainPosts = draft.mainPosts.concat(action.data);
      draft.hasMorePost = action.data.length === 10;
      break;

    case LOAD_HASHTAG_POSTS_FAILURE:
      draft.loadHashtagPostsLoading = false;
      draft.loadHashtagPostsError = action.error;
      break;

    case LOAD_POST_ONE_REQUEST:
      draft.loadPostOneLoading = true;
      draft.loadPostOneDone = false;
      draft.loadPostOneError = null;
      break;

    case LOAD_POST_ONE_SUCCESS:
      draft.loadPostOneLoading = false;
      draft.loadPostOneDone = true;
      draft.singlePost = action.data;
      break;

    case LOAD_POST_ONE_FAILURE:
      draft.loadPostOneLoading = false;
      draft.loadPostOneError = action.error;
      break;

    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;

    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.mainPosts.unshift(action.data);
      draft.imagePaths = [];
      break;

    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;

    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;

    case REMOVE_POST_SUCCESS:
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
      draft.removePostLoading = false;
      draft.removePostDone = true;
      break;

    case REMOVE_POST_FAILURE:
      draft.removePostLoading = false;
      draft.removePostError = action.error;
      break;

    case UPDATE_POST_REQUEST:
      draft.updatePostLoading = true;
      draft.updatePostDone = false;
      draft.updatePostError = null;
      break;

    case UPDATE_POST_SUCCESS:
      draft.mainPosts.find(v => v.id === action.data.PostId).content = action.data.content;
      draft.updatePostLoading = false;
      draft.updatePostDone = true;
      break;

    case UPDATE_POST_FAILURE:
      draft.updatePostLoading = false;
      draft.updatePostError = action.error;
      break;

    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;

    case ADD_COMMENT_SUCCESS:
      const post = draft.mainPosts.find(v => v.id === action.data.PostId);
      post.Comments.unshift(action.data);
      draft.addCommentLoading = false;
      draft.addCommentDone = true;
      break;

    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, loginAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");


const initialState = {
  loadFollowersLoading: false,
  loadFollowersDone: false,
  loadFollowersError: null,
  loadMyFollowingsLoading: false,
  loadMyFollowingsDone: false,
  loadMyFollowingsError: null,
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
  removeFollowerLoading: false,
  removeFollowerDone: false,
  removeFollowerError: null,
  followLoading: false,
  followDone: false,
  followError: null,
  unfollowLoading: false,
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  userInfo: null
};
const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";
const LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST";
const LOAD_MY_INFO_SUCCESS = "LOAD_MY_INFO_SUCCESS";
const LOAD_MY_INFO_FAILURE = "LOAD_MY_INFO_FAILURE";
const LOAD_FOLLOWERS_REQUEST = "LOAD_FOLLOWERS_REQUEST";
const LOAD_FOLLOWERS_SUCCESS = "LOAD_FOLLOWERS_SUCCESS";
const LOAD_FOLLOWERS_FAILURE = "LOAD_FOLLOWERS_FAILURE";
const LOAD_FOLLOWINGS_REQUEST = "LOAD_FOLLOWINGS_REQUEST";
const LOAD_FOLLOWINGS_SUCCESS = "LOAD_FOLLOWINGS_SUCCESS";
const LOAD_FOLLOWINGS_FAILURE = "LOAD_FOLLOWINGS_FAILURE";
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
const FOLLOW_REQUEST = "FOLLOW_REQUEST";
const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const FOLLOW_FAILURE = "FOLLOW_FAILURE";
const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";
const REMOVE_FOLLOWER_REQUEST = "REMOVE_FOLLOWER_REQUEST";
const REMOVE_FOLLOWER_SUCCESS = "REMOVE_FOLLOWER_SUCCESS";
const REMOVE_FOLLOWER_FAILURE = "REMOVE_FOLLOWER_FAILURE";
const ADD_POST_TO_ME = "ADD_POST_TO_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME"; // login

const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
}; //logout

const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST
  };
};
const loginAction = data => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(loginRequestAction());
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/login").then(res => {
      dispatch(loginSuccessAction(res.data));
    }).catch(err => {
      dispatch(loginFailureAction(err));
    });
  };
};

const reducer = (state = initialState, action) => {
  return Object(_util_produce__WEBPACK_IMPORTED_MODULE_1__["default"])(state, draft => {
    switch (action.type) {
      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserError = null;
        draft.loadUserDone = false;
        break;

      case LOAD_USER_SUCCESS:
        draft.loadUserLoading = false;
        draft.loadUserDone = true;
        draft.userInfo = action.data;
        break;

      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;

      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoError = null;
        draft.loadMyInfoDone = false;
        break;

      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        draft.me = action.data;
        break;

      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;

      case REMOVE_FOLLOWER_REQUEST:
        draft.removeFollowerLoading = true;
        draft.removeFollowerError = null;
        draft.removeFollowerDone = false;
        break;

      case REMOVE_FOLLOWER_SUCCESS:
        draft.removeFollowerLoading = false;
        draft.removeFollowerDone = true;
        draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
        break;

      case REMOVE_FOLLOWER_FAILURE:
        draft.removeFollowerLoading = false;
        draft.removeFollowerError = action.error;
        break;

      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followError = null;
        draft.followDone = false;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me.Followings.push({
          id: action.data.UserId
        });
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case LOAD_FOLLOWERS_REQUEST:
        draft.loadFollowersLoading = true;
        draft.loadFollowersError = null;
        draft.loadFollowersDone = true;
        break;

      case LOAD_FOLLOWERS_SUCCESS:
        draft.loadFollowersLoading = false;
        draft.loadFollowersDone = true;
        draft.me.Followers = action.data;
        break;

      case LOAD_FOLLOWERS_FAILURE:
        draft.loadFollowersLoading = false;
        draft.loadFollowersError = action.error;
        break;

      case LOAD_FOLLOWINGS_REQUEST:
        draft.loadFollowingsLoading = true;
        draft.loadFollowingsError = null;
        draft.loadFollowingsDone = false;
        break;

      case LOAD_FOLLOWINGS_SUCCESS:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsDone = true;
        draft.me.Followings = action.data;
        break;

      case LOAD_FOLLOWINGS_FAILURE:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsError = action.error;
        break;

      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowError = null;
        draft.unfollowDone = false;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true;
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameError = null;
        draft.changeNicknameDone = false;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.me.nickname = action.data.nickname;
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
        break;

      default:
        return state;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = "http://localhost:3065";
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);





function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LIKE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/post", data);
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function loadPostAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostAPI, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function loadHashtagPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function* loadHashtagPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_HASHTAG_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.log(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_HASHTAG_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function loadUserPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`);
}

function* loadUserPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function loadPostOneAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/post/${data}`);
}

function* loadPostOne(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostOneAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_ONE_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_ONE_FAILURE"],
      data: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: REMOVE_POST_FAILURE,
      data: err.response.data
    });
  }
}

function updatePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch(`/post/${data.PostId}`, data);
}

function* updatePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(updatePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UPDATE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UPDATE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`/post/${data.postId}/comment`, data); // POST /post/1/comment
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/post/images", data);
}

function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}

function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`/post/${data}/retweet`);
}

function* retweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(retweetAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["RETWEET_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["RETWEET_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_REQUEST"], addPost);
}

function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_REQUEST"], loadPost);
}

function* watchLoadPostOne() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_ONE_REQUEST"], loadPostOne);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["RETWEET_REQUEST"], retweet);
}

function* watchLoadUserPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_POSTS_REQUEST"], loadUserPosts);
}

function* watchLoadHashtagPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPosts);
}

function* watchUpdatePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["UPDATE_POST_REQUEST"], updatePost);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPostOne), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUpdatePost)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


 //call은 동기 함수 호출, fork는 비동기 함수 호출

function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/user/followers", data);
}

function* loadFollowers(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowersAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/user/followings", data);
}

function* loadFollowings(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowingsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_FAILURE"],
      error: err.response.data
    });
  }
}

function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch("/user/nickname", {
    nickname: data
  });
}

function* changeNickname(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(changeNicknameAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}

function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/user");
}

function* loadMyInfo(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMyInfoAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/user/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
      error: err.response.data
    });
  }
}

function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/user/follower/${data}`);
}

function* removeFollower(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removeFollowerAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_FAILURE"],
      error: err.response.data
    });
  }
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`user/${data}/follow`, data);
}

function* follow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(followAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`user/${data}/follow`, data);
}

function* unfollow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unfollowAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/user/login", data);
}

function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logInAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/user/logout");
}

function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/user", data);
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
}

function* watchLoadMyInfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* watchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickname);
}

function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);
}

function* watchLoadFollowings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);
}

function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_REQUEST"], removeFollower);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyInfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUser)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_5__);







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_5___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_3__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "./util/produce.js":
/*!*************************!*\
  !*** ./util/produce.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((...args) => {
  Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(...args);
});

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy8uL3V0aWwvcHJvZHVjZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VFZmZlY3QiLCJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImNvbWJpbmVkUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0IiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVubGlrZVBvc3RMb2FkaW5nIiwidW5saWtlUG9zdERvbmUiLCJ1bmxpa2VQb3N0RXJyb3IiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwibG9hZFVzZXJQb3N0c0xvYWRpbmciLCJsb2FkVXNlclBvc3RzRG9uZSIsImxvYWRVc2VyUG9zdHNFcnJvciIsImxvYWRIYXNodGFnUG9zdHNMb2FkaW5nIiwibG9hZEhhc2h0YWdQb3N0c0RvbmUiLCJsb2FkSGFzaHRhZ1Bvc3RzRXJyb3IiLCJsb2FkUG9zdE9uZUxvYWRpbmciLCJsb2FkUG9zdE9uZURvbmUiLCJsb2FkUG9zdE9uZUVycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJ1cGRhdGVQb3N0TG9hZGluZyIsInVwZGF0ZVBvc3REb25lIiwidXBkYXRlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJyZXR3ZWV0TG9hZGluZyIsInJldHdlZXREb25lIiwicmV0d2VldEVycm9yIiwic2luZ2xlUG9zdCIsIlJFTU9WRV9JTUFHRSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUIiwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSIsIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSIsIkxPQURfUE9TVF9PTkVfUkVRVUVTVCIsIkxPQURfUE9TVF9PTkVfU1VDQ0VTUyIsIkxPQURfUE9TVF9PTkVfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlVQREFURV9QT1NUX1JFUVVFU1QiLCJVUERBVEVfUE9TVF9TVUNDRVNTIiwiVVBEQVRFX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFVFdFRVRfUkVRVUVTVCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJmaWx0ZXIiLCJ2IiwiaSIsInVuc2hpZnQiLCJlcnJvciIsImZpbmQiLCJpZCIsIlBvc3RJZCIsIkxpa2VycyIsInB1c2giLCJVc2VySWQiLCJjb25jYXQiLCJsZW5ndGgiLCJjb250ZW50IiwiQ29tbWVudHMiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNEb25lIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwibG9hZE15Rm9sbG93aW5nc0xvYWRpbmciLCJsb2FkTXlGb2xsb3dpbmdzRG9uZSIsImxvYWRNeUZvbGxvd2luZ3NFcnJvciIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJEb25lIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwidXNlckluZm8iLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsImxvZ2luQWN0aW9uIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsImF4aW9zIiwidGhlbiIsInJlcyIsImxvZ2luU3VjY2Vzc0FjdGlvbiIsImNhdGNoIiwiZXJyIiwibG9naW5GYWlsdXJlQWN0aW9uIiwiRm9sbG93ZXJzIiwiRm9sbG93aW5ncyIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJuaWNrbmFtZSIsIlBvc3RzIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImxpa2VQb3N0QVBJIiwicGF0Y2giLCJsaWtlUG9zdCIsInJlc3VsdCIsImNhbGwiLCJwdXQiLCJyZXNwb25zZSIsInVubGlrZVBvc3RBUEkiLCJkZWxldGUiLCJ1bmxpa2VQb3N0IiwiYWRkUG9zdEFQSSIsImxvYWRQb3N0QVBJIiwibGFzdElkIiwiZ2V0IiwibG9hZFBvc3QiLCJsb2FkSGFzaHRhZ1Bvc3RzQVBJIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9hZEhhc2h0YWdQb3N0cyIsImxvYWRVc2VyUG9zdHNBUEkiLCJsb2FkVXNlclBvc3RzIiwibG9hZFBvc3RPbmVBUEkiLCJsb2FkUG9zdE9uZSIsInJlbW92ZVBvc3RBUEkiLCJyZW1vdmVQb3N0IiwidXBkYXRlUG9zdEFQSSIsInVwZGF0ZVBvc3QiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwicmV0d2VldEFQSSIsInJldHdlZXQiLCJ3YXRjaExpa2VQb3N0IiwidGFrZUxhdGVzdCIsIndhdGNoVW5saWtlUG9zdCIsIndhdGNoQWRkUG9zdCIsIndhdGNoTG9hZFBvc3QiLCJ0aHJvdHRsZSIsIndhdGNoTG9hZFBvc3RPbmUiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoUmV0d2VldCIsIndhdGNoTG9hZFVzZXJQb3N0cyIsIndhdGNoTG9hZEhhc2h0YWdQb3N0cyIsIndhdGNoVXBkYXRlUG9zdCIsImxvYWRGb2xsb3dlcnNBUEkiLCJsb2FkRm9sbG93ZXJzIiwibG9hZEZvbGxvd2luZ3NBUEkiLCJsb2FkRm9sbG93aW5ncyIsImNoYW5nZU5pY2tuYW1lQVBJIiwiY2hhbmdlTmlja25hbWUiLCJsb2FkTXlJbmZvQVBJIiwibG9hZE15SW5mbyIsImxvYWRVc2VyQVBJIiwibG9hZFVzZXIiLCJyZW1vdmVGb2xsb3dlckFQSSIsInJlbW92ZUZvbGxvd2VyIiwiZm9sbG93QVBJIiwiZm9sbG93IiwidW5mb2xsb3dBUEkiLCJ1bmZvbGxvdyIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJ3YXRjaExvYWRVc2VyIiwid2F0Y2hMb2FkTXlJbmZvbGxvdyIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIndhdGNoTG9hZEZvbGxvd2VycyIsIndhdGNoTG9hZEZvbGxvd2luZ3MiLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwibG9nZ2VyTWlkZGxld2FyZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJhcmdzIiwiZW5hYmxlRVM1Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNB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SUEsUUFBTUssS0FBSyxHQUFHQyx5REFBVyxDQUFDN00saURBQUQsRUFBVXdNLFFBQVYsQ0FBekI7QUFDQUksT0FBSyxDQUFDRSxRQUFOLEdBQWlCVCxjQUFjLENBQUNVLEdBQWYsQ0FBbUJqRyw4Q0FBbkIsQ0FBakI7QUFDQSxTQUFPOEYsS0FBUDtBQUNELENBVkQ7O0FBWUEsTUFBTTNTLE9BQU8sR0FBRytTLHdFQUFhLENBQUNaLGNBQUQsRUFBaUI7QUFDNUNhLE9BQUs7QUFEdUMsQ0FBakIsQ0FBN0I7QUFJZWhULHNFQUFmLEU7Ozs7Ozs7Ozs7OztBQy9CQTtBQUFBO0FBQUE7QUFBQTtBQUVlLGdFQUFDLEdBQUdpVCxJQUFKLEtBQWE7QUFDMUJDLHlEQUFTO0FBQ1QsU0FBT2xOLHFEQUFPLENBQUMsR0FBR2lOLElBQUosQ0FBZDtBQUNELENBSEQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xyXG5SZWFjdC51c2VMYXlvdXRFZmZlY3QgPSBSZWFjdC51c2VFZmZlY3Q7XHJcblxyXG5jb25zdCBOb2RlQmlyZCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiPjwvbWV0YT5cclxuICAgICAgICA8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDb21wb25lbnQ+PC9Db21wb25lbnQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuTm9kZUJpcmQucHJvcFR5cGVzID0ge1xyXG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChOb2RlQmlyZCk7XHJcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBwb3N0IGZyb20gXCIuL3Bvc3RcIjtcclxuXHJcbi8v7JWh7IWY7J2AIOqwneyytFxyXG5cclxuLy8o7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG4vL+umrOuTgOyEnOulvCDqsbDsuZjqs6Ag64KY66m0IOy0iOq4sCBzdGF0ZeyZgOuKlCDri6Trpbgg6rCd7LK06rCAIOunjOuTpOyWtOynkFxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICBjb25zb2xlLmxvZyhcIkhZRFJBVEVcIiwgYWN0aW9uKTtcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgIHVzZXIsXHJcbiAgICAgICAgcG9zdCxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCIuLi91dGlsL3Byb2R1Y2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBoYXNNb3JlUG9zdDogdHJ1ZSxcclxuICBsaWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgbGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICB1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkVXNlclBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFVzZXJQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRVc2VyUG9zdHNFcnJvcjogbnVsbCxcclxuICBsb2FkSGFzaHRhZ1Bvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZEhhc2h0YWdQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRIYXNodGFnUG9zdHNFcnJvcjogbnVsbCxcclxuICBsb2FkUG9zdE9uZUxvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0T25lRG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RPbmVFcnJvcjogbnVsbCxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICB1cGRhdGVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgdXBkYXRlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHVwZGF0ZVBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICB1cGxvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSxcclxuICB1cGxvYWRJbWFnZXNEb25lOiBmYWxzZSxcclxuICB1cGxvYWRJbWFnZXNFcnJvcjogbnVsbCxcclxuICByZXR3ZWV0TG9hZGluZzogZmFsc2UsXHJcbiAgcmV0d2VldERvbmU6IGZhbHNlLFxyXG4gIHJldHdlZXRFcnJvcjogbnVsbCxcclxuICBzaW5nbGVQb3N0OiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9IFwiUkVNT1ZFX0lNQUdFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gXCJVUExPQURfSU1BR0VTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9IFwiVVBMT0FEX0lNQUdFU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSBcIlVQTE9BRF9JTUFHRVNfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gXCJMSUtFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSBcIkxJS0VfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9IFwiTElLRV9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gXCJVTkxJS0VfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gXCJVTkxJS0VfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gXCJVTkxJS0VfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSBcIkxPQURfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gXCJMT0FEX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gXCJMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfVVNFUl9QT1NUU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTID0gXCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX09ORV9SRVFVRVNUID0gXCJMT0FEX1BPU1RfT05FX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9PTkVfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUX09ORV9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfT05FX0ZBSUxVUkUgPSBcIkxPQURfUE9TVF9PTkVfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TVF9SRVFVRVNUID0gXCJVUERBVEVfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TVF9TVUNDRVNTID0gXCJVUERBVEVfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TVF9GQUlMVVJFID0gXCJVUERBVEVfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1JFUVVFU1QgPSBcIlJFVFdFRVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gXCJSRVRXRUVUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfRkFJTFVSRSA9IFwiUkVUV0VFVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+XHJcbiAgcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX0lNQUdFOlxyXG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFVFdFRVRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFVFdFRVRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFJFVFdFRVRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuTGlrZXJzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3QgPSBhY3Rpb24uZGF0YS5sZW5ndGggPT09IDEwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFVzZXJQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFVzZXJQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkVXNlclBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFVzZXJQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkVXNlclBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZEhhc2h0YWdQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRIYXNodGFnUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZEhhc2h0YWdQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkSGFzaHRhZ1Bvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRIYXNodGFnUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZEhhc2h0YWdQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkSGFzaHRhZ1Bvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUX09ORV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0T25lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RPbmVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RPbmVFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUX09ORV9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0T25lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0T25lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuc2luZ2xlUG9zdCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVF9PTkVfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdE9uZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdE9uZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKFxyXG4gICAgICAgICAgKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUERBVEVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51cGRhdGVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBEQVRFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKS5jb250ZW50ID1cclxuICAgICAgICAgIGFjdGlvbi5kYXRhLmNvbnRlbnQ7XHJcbiAgICAgICAgZHJhZnQudXBkYXRlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGRhdGVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBEQVRFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51cGRhdGVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tIFwiLi4vdXRpbC9wcm9kdWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvYWRGb2xsb3dlcnNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkRm9sbG93ZXJzRG9uZTogZmFsc2UsXHJcbiAgbG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLFxyXG4gIGxvYWRNeUZvbGxvd2luZ3NMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkTXlGb2xsb3dpbmdzRG9uZTogZmFsc2UsXHJcbiAgbG9hZE15Rm9sbG93aW5nc0Vycm9yOiBudWxsLFxyXG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXHJcbiAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxyXG4gIGxvYWRVc2VyTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlckVycm9yOiBudWxsLFxyXG4gIHJlbW92ZUZvbGxvd2VyTG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlRm9sbG93ZXJEb25lOiBmYWxzZSxcclxuICByZW1vdmVGb2xsb3dlckVycm9yOiBudWxsLFxyXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLFxyXG4gIGZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gIGZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIHVuZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gIGxvZ091dEVycm9yOiBudWxsLFxyXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIG1lOiBudWxsLFxyXG4gIHVzZXJJbmZvOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gXCJMT0FEX1VTRVJfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSBcIkxPQURfVVNFUl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9IFwiTE9BRF9VU0VSX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9IFwiTE9BRF9NWV9JTkZPX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gXCJMT0FEX01ZX0lORk9fU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX0ZBSUxVUkUgPSBcIkxPQURfTVlfSU5GT19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9IFwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9IFwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSA9IFwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gXCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSBcIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSA9IFwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJMT0dfSU5fU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gXCJMT0dfT1VUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwiTE9HX09VVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSBcIkxPR19PVVRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9IFwiU0lHTl9VUF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcIlNJR05fVVBfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gXCJTSUdOX1VQX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9IFwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gXCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSBcIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSBcIkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9IFwiRk9MTE9XX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gXCJGT0xMT1dfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSBcIlVORk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSBcIlVORk9MTE9XX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSBcIlVORk9MTE9XX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCA9IFwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTID0gXCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUgPSBcIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSBcIkFERF9QT1NUX1RPX01FXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9IFwiUkVNT1ZFX1BPU1RfT0ZfTUVcIjtcclxuXHJcbi8vIGxvZ2luXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbi8vbG9nb3V0XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcclxuICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbigpKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFwiL2FwaS9sb2dpblwiKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzQWN0aW9uKHJlcy5kYXRhKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9naW5GYWlsdXJlQWN0aW9uKGVycikpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51c2VySW5mbyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBkcmFmdC5tZS5Gb2xsb3dlcnMuZmlsdGVyKFxyXG4gICAgICAgICAgKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKFxyXG4gICAgICAgICAgKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSBcIi4vcG9zdFwiO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSBcIi4vdXNlclwiO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDY1XCI7XHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHBvc3RTYWdhKSwgZm9yayh1c2VyU2FnYSldKTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGRlbGF5LFxyXG4gIHB1dCxcclxuICB0YWtlTGF0ZXN0LFxyXG4gIGFsbCxcclxuICBmb3JrLFxyXG4gIHRocm90dGxlLFxyXG4gIGNhbGwsXHJcbn0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG4gIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICBBRERfUE9TVF9GQUlMVVJFLFxyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIExPQURfUE9TVF9SRVFVRVNULFxyXG4gIExPQURfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfUE9TVF9PTkVfUkVRVUVTVCxcclxuICBMT0FEX1BPU1RfT05FX1NVQ0NFU1MsXHJcbiAgTE9BRF9QT1NUX09ORV9GQUlMVVJFLFxyXG4gIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gIFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgUkVUV0VFVF9TVUNDRVNTLFxyXG4gIFJFVFdFRVRfRkFJTFVSRSxcclxuICBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcclxuICBVUERBVEVfUE9TVF9SRVFVRVNULFxyXG4gIFVQREFURV9QT1NUX1NVQ0NFU1MsXHJcbiAgVVBEQVRFX1BPU1RfRkFJTFVSRSxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9wb3N0XCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBUEkobGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RBUEksIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRIYXNodGFnUG9zdHNBUEkoZGF0YSwgbGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChcclxuICAgIGAvaGFzaHRhZy8ke2VuY29kZVVSSUNvbXBvbmVudChkYXRhKX0/bGFzdElkPSR7bGFzdElkIHx8IDB9YFxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkSGFzaHRhZ1Bvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRIYXNodGFnUG9zdHNBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFVzZXJQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9L3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFVzZXJQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlclBvc3RzQVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RPbmVBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0LyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0T25lKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0T25lQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfT05FX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfT05FX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YS5Qb3N0SWR9YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGRhdGVQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwZGF0ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQREFURV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUERBVEVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpOyAvLyBQT1NUIC9wb3N0LzEvY29tbWVudFxyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Bvc3QvaW1hZ2VzXCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldHdlZXRBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGF9L3JldHdlZXRgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJldHdlZXQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmV0d2VldEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVUV0VFVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVUV0VFVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5saWtlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0KCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0T25lKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUX09ORV9SRVFVRVNULCBsb2FkUG9zdE9uZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRVRXRUVUX1JFUVVFU1QsIHJldHdlZXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlclBvc3RzKCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfVVNFUl9QT1NUU19SRVFVRVNULCBsb2FkVXNlclBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEhhc2h0YWdQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgbG9hZEhhc2h0YWdQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwZGF0ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUERBVEVfUE9TVF9SRVFVRVNULCB1cGRhdGVQb3N0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxyXG4gICAgZm9yayh3YXRjaFJldHdlZXQpLFxyXG4gICAgZm9yayh3YXRjaExvYWRQb3N0T25lKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkVXNlclBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hVcGRhdGVQb3N0KSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFsbCwgZm9yaywgZGVsYXksIHRha2VMYXRlc3QsIHB1dCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHtcclxuICBGT0xMT1dfUkVRVUVTVCxcclxuICBGT0xMT1dfU1VDQ0VTUyxcclxuICBGT0xMT1dfRkFJTFVSRSxcclxuICBVTkZPTExPV19SRVFVRVNULFxyXG4gIFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgVU5GT0xMT1dfRkFJTFVSRSxcclxuICBMT0dfSU5fUkVRVUVTVCxcclxuICBMT0dfSU5fU1VDQ0VTUyxcclxuICBMT0dfSU5fRkFJTFVSRSxcclxuICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgTE9HX09VVF9TVUNDRVNTLFxyXG4gIExPR19PVVRfRkFJTFVSRSxcclxuICBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgU0lHTl9VUF9TVUNDRVNTLFxyXG4gIFNJR05fVVBfRkFJTFVSRSxcclxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICBMT0FEX0ZPTExPV0VSU19SRVFVRVNULFxyXG4gIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcbiAgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCxcclxuICBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcclxuICBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuICBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCxcclxuICBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICBMT0FEX1VTRVJfRkFJTFVSRSxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG4vL2NhbGzsnYAg64+Z6riwIO2VqOyImCDtmLjstpwsIGZvcmvripQg67mE64+Z6riwIO2VqOyImCDtmLjstpxcclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dlcnNBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoXCIvdXNlci9mb2xsb3dlcnNcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRm9sbG93ZXJzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dlcnNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dpbmdzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KFwiL3VzZXIvZm9sbG93aW5nc1wiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dpbmdzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dpbmdzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlTmlja25hbWVBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaChcIi91c2VyL25pY2tuYW1lXCIsIHsgbmlja25hbWU6IGRhdGEgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrbmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTXlJbmZvQVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoXCIvdXNlclwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRNeUluZm8oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlckFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRm9sbG93ZXJBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyL2ZvbGxvd2VyLyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZUZvbGxvd2VyKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGB1c2VyLyR7ZGF0YX0vZm9sbG93YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZm9sbG93QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGB1c2VyLyR7ZGF0YX0vZm9sbG93YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG5cclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi91c2VyL2xvZ2luXCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcclxuXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi91c2VyL2xvZ291dFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi91c2VyXCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUkVRVUVTVCwgbG9hZFVzZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tuYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2VycygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRGb2xsb3dlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5ncygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBsb2FkRm9sbG93aW5ncyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUZvbGxvd2VyKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIHJlbW92ZUZvbGxvd2VyKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgZm9yayh3YXRjaFVuZm9sbG93KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvbGxvdyksXHJcbiAgICBmb3JrKHdhdGNoQ2hhbmdlTmlja25hbWUpLFxyXG4gICAgZm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRGb2xsb3dpbmdzKSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVGb2xsb3dlciksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXIpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi4vc2FnYXNcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID1cclxuICAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT5cclxuICAobmV4dCkgPT5cclxuICAoYWN0aW9uKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxuICB9O1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9XHJcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcclxuICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCJpbXBvcnQgeyBlbmFibGVFUzUsIHByb2R1Y2UgfSBmcm9tIFwiaW1tZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICguLi5hcmdzKSA9PiB7XHJcbiAgZW5hYmxlRVM1KCk7XHJcbiAgcmV0dXJuIHByb2R1Y2UoLi4uYXJncyk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==