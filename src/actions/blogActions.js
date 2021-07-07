import Axios from "axios";
import * as Types from "./types";
import setAuthToken from "../utils/setAuthToken";
import { message } from "antd";
import { Link } from "react-router-dom";

const { REACT_APP_API } = process.env;

export const getBlogs = props => dispatch => {
  return new Promise((resolve, reject) => {
    console.log(props.obj);
    Axios.get(`${REACT_APP_API}/blogs`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.auth_token,
      },
    })
      .then(response => {
        console.log(response);
        console.log("posts", response.data);
        dispatch({
          type: Types.GET_POSTS,
          payload: {
            posts: response.data,
          },
        });
        // message.success(response.data.message);
        resolve(true);
      })
      .catch(error => {
        message.error("Posts retrieval failed");
        resolve(false);
        console.log(error.response);
      });
  });
};

export const getPostsUsingSearch = (props, history) => dispatch => {
  return new Promise((resolve, reject) => {
    console.log(props.obj);
    Axios.get(`/api/blogs/getPostsUsingSearch/?search=${props.obj.search}`, {
      // headers: {
      //   "Content-Type": "application/json",
      //   Authorization: "Bearer " + localStorage.auth_token,
      // },
    })
      .then(response => {
        console.log(response);
        console.log("posts", response.data.posts);
        dispatch({
          type: Types.GET_POSTS_USING_SEARCH,
          payload: {
            posts: response.data.posts,
            titleWise: response.data.titleWise,
            categoryWise: response.data.categoryWise,
            count: response.data.count,
          },
        });
        // message.success(response.data.message);
        resolve(true);
      })
      .catch(error => {
        message.error("Posts retrieval failed");
        resolve(false);
        console.log(error.response);
      });
  });
};

export const getSinglePost = (props, history) => dispatch => {
  return new Promise((resolve, reject) => {
    console.log(props);
    Axios.get(`${REACT_APP_API}/blogs/${props.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.auth_token,
      },
    })
      .then(response => {
        console.log(response);
        dispatch({
          type: Types.GET_SINGLE_POST,
          payload: {
            singlePost: response.data,
          },
        });
        // message.success("Successfully retrieved post")
        resolve(true);
      })
      .catch(error => {
        message.error("Post retrieval failed");
        console.log(error);
        resolve(false);
      });
  });
};

export const getUserPosts = (props, history) => dispatch => {
  return new Promise((resolve, reject) => {
    Axios.get(`${REACT_APP_API}/blogs/user/${props}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.auth_token,
      },
    })
      .then(response => {
        console.log(response.data.blogs);
        dispatch({
          type: Types.GET_USER_POSTS,
          payload: {
            posts: response.data.blogs,
          },
        });
        message.success("Successfully retrieved post");
        resolve(response.data);
      })
      .catch(error => {
        message.error("Post retrieval failed");
        console.log(error);
        resolve(false);
      });
  });
};

export const createPost = (props, history) => async dispatch => {
  console.log(props);
  const response = await Axios.post(`${REACT_APP_API}/blogs`, props.obj, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.auth_token,
    },
  });

  if (response.data) {
    console.log("here");
    dispatch({
      type: Types.CREATE_POST,
      payload: {
        createdPost: response.data,
      },
    });

    return response.data;
  } else {
    message.error("Post creation failed");
  }
};

export const updateBlogPost = (props, history) => dispatch => {
  return new Promise((resolve, reject) => {
    Axios.put(`${REACT_APP_API}/blogs/${props.blogId}`, props.obj, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.auth_token,
      },
    })
      .then(response => {
        console.log(response);
        dispatch({
          type: Types.UPDATE_POST,
          payload: {
            updatedPost: response.data.updatedPost,
          },
        });
        resolve(true);
      })
      .catch(error => {
        resolve(false);
        console.log(error.response);
      });
  });
};

export const deletePost = (props, history) => dispatch => {
  return new Promise((resolve, reject) => {
    console.log(props);
    Axios.delete(`${REACT_APP_API}/blogs/${props.obj.blogId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.auth_token,
      },
    })
      .then(response => {
        console.log(response.data);
        dispatch({
          type: Types.DELETE_POST,
          payload: {
            deletedPost: response.data,
          },
        });

        let user = {
          _id: props.auth.user._id,
        };
        props.blogActions.getUserPosts({ user, ...props });
        resolve(true);
      })
      .catch(error => {
        resolve(false);
        console.log(error.response);
      });
  });
};

export const getComments = props => dispatch => {
  return new Promise((resolve, reject) => {
    Axios.get(`${REACT_APP_API}/comments`, props.obj, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.auth_token,
      },
    })
      .then(response => {
        console.log(response);
        dispatch({
          type: Types.GET_COMMENTS,
          payload: {
            comments: response.data.comments,
          },
        });
        // message.success("Comments retrieved successfully")
        // props.history.push('/business/blogs')
        resolve(true);
      })
      .catch(error => {
        message.error("Comments retrieval failed");
        console.log(error.response);
        resolve(false);
      });
  });
};

export const postComment = props => dispatch => {
  return new Promise((resolve, reject) => {
    Axios.post(`${REACT_APP_API}/comments`, props.obj, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.auth_token,
      },
    })
      .then(response => {
        console.log(response.data);

        message.success("Comment posted successfully");
        // props.history.push('/business/blogs')
        resolve(response.data);
      })
      .catch(error => {
        message.error("Comment posting failed");
        console.log(error.response);
        return resolve(false);
      });
  });
};

export const deleteComment = props => dispatch => {
  return new Promise((resolve, reject) => {
    Axios.delete(`${REACT_APP_API}/comments/${props.commentId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.auth_token,
      },
    })
      .then(response => {
        console.log(response);

        message.success("Comment deleted successfully");
        // props.history.push('/business/blogs')
        resolve(true);
      })
      .catch(error => {
        message.error("Comment deletion failed");
        console.log(error.response);
        return resolve(false);
      });
  });
};

export const likePost = props => dispatch => {
  return new Promise((resolve, reject) => {
    console.log(props);
    let obj = {
      blog: props.blogId,
      user: props.user,
    };
    Axios.post(`${REACT_APP_API}/likes`, obj, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.auth_token,
      },
    })
      .then(response => {
        console.log(response);

        // message.success("Post liked successfully");
        // props.history.push('/business/blogs')
        resolve(true);
      })
      .catch(error => {
        message.error("Post like failed");
        console.log(error.response);
        return resolve(false);
      });
  });
};

export const unlikePost = props => dispatch => {
  console.log(props);
  let obj = {
    likes: props.likes,
  };
  return new Promise((resolve, reject) => {
    Axios.delete(`${REACT_APP_API}/likes/${props.likeId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.auth_token,
      },
    })
      .then(response => {
        console.log(response);

        // message.success("Post unliked successfully");
        // props.history.push('/business/blogs')
        resolve(true);
      })
      .catch(error => {
        message.error("Post unlike failed");
        console.log(error.response);
        return resolve(false);
      });
  });
};

export const reportPost = props => dispatch => {
  return new Promise((resolve, reject) => {
    Axios.post(`/api/blogs/reportPost/`, props.obj, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.auth_token,
      },
    })
      .then(response => {
        console.log(response);
        // message.success(response.data.message);
        resolve(true);
      })
      .catch(error => {
        message.error("Failed to report post");
        console.log(error.response);
        return resolve(false);
      });
  });
};
export const getBlogUserById = (id, type) => dispatch => {
  return new Promise((resolve, reject) => {
    if (type === "Lawfirm") {
      Axios.get(`${REACT_APP_API}/lawfirm-users/${id}`)
        .then(res => {
          if (res) {
            console.log(res.data);

            dispatch({
              type: Types.BLOG_USER,
              payload: {
                blogUser: res.data,
              },
            });

            return resolve(res.data);
          }
        })
        .catch(error => {
          if (error && error.response) {
            console.log(error.response.data);

            message.error(error.response.data.message[0].messages[0].message);
            return resolve(false);
          }
        });
    } else {
      Axios.get(`${REACT_APP_API}/lawyer-users/${id}`)
        .then(res => {
          if (res) {
            console.log(res.data);

            dispatch({
              type: Types.BLOG_USER,
              payload: {
                blogUser: res.data,
              },
            });

            return resolve(res.data);
          }
        })
        .catch(error => {
          if (error && error.response) {
            console.log(error.response.data);

            message.error(error.response.data.message[0].messages[0].message);
            return resolve(false);
          }
        });
    }
  });
};
export const getPopularBlogs = props => dispatch => {
  console.log("getting");
  return new Promise((resolve, reject) => {
    Axios.get(`${REACT_APP_API}/blogs?_sort=likes:DESC&_limit=3`)
      .then(response => {
        console.log(response);
        console.log("posts", response.data);
        dispatch({
          type: Types.GET_POPULAR_POSTS,
          payload: {
            posts: response.data,
          },
        });
        // message.success(response.data.message);
        resolve(true);
      })
      .catch(error => {
        message.error("Posts retrieval failed");
        resolve(false);
        console.log(error.response);
      });
  });
};
export const getRecentBlogs = props => dispatch => {
  console.log("getting");
  return new Promise((resolve, reject) => {
    Axios.get(`${REACT_APP_API}/blogs?_sort=createdAt:DESC&_limit=5`)
      .then(response => {
        console.log(response);
        console.log("posts", response.data);
        dispatch({
          type: Types.GET_RECENT_POSTS,
          payload: {
            posts: response.data,
          },
        });
        // message.success(response.data.message);
        resolve(true);
      })
      .catch(error => {
        message.error("Posts retrieval failed");
        resolve(false);
        console.log(error.response);
      });
  });
};
