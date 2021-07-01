import * as Types from "../actions/types";
const init = {
  posts: [],
  allBlogs:[],
  deletePost: null,
  createdPost: null,
  singlePost: null,
  comments: [],
  deletedComment: null,
  searchPosts: [],
  count: 0,
  blogUser:null,
};
const blogReducer = (state = init, action) => {
  switch (action.type) {
    case Types.GET_POSTS: {
      return {
        ...state,
        allBlogs: action.payload.posts,
      };
    }
    case Types.GET_SINGLE_POST: {
      return {
        ...state,
        singlePost: action.payload.singlePost,
      };
    }
    case Types.GET_USER_POSTS: {
      return {
        ...state,
        posts:action.payload.posts,
      };
    }
    case Types.CREATE_POST: {
      return {
        ...state,
        createdPost: action.payload.createdPost,
      };
    }
    case Types.UPDATE_POST: {
      return {
        ...state,
        updatedPost: action.payload.updatedPost,
      };
    }
    case Types.DELETE_POST: {
      return {
        ...state,
        deletedPost: action.payload.deletedPost,
      };
    }
    case Types.POST_COMMENT: {
      return {
        ...state,
        createdComment: action.payload.createdComment,
      };
    }
    case Types.GET_COMMENTS: {
      return {
        ...state,
        comments: action.payload.comments,
      };
    }
    case Types.BLOG_USER: {
      return {
        ...state,
        blogUser: action.payload.blogUser,
      };
    }

    case Types.GET_POSTS_USING_SEARCH: {
      return {
        ...state,
        searchPosts: action.payload.posts,
        titleWise: action.payload.titleWise,
        categoryWise: action.payload.categoryWise,
        count: action.payload.count,
      };
    }

    case Types.CLEAR_BUSINESSES_ITEMS: {
      return init;
    }

    // case Types.LOGOUT: {
    //   return init;
    // }

    default:
      return state;
  }
};

export default blogReducer;
