// Types
import { types } from "./types";

export const postsActions = {
    fillPosts: (posts) => {
        return {
            type:    types.FILL_POSTS,
            payload: posts,
        };
    },
    createPost: (post) => {
        return {
            type:    types.CREATE_POST,
            payload: post,
        };
    },
    createPostAsync: (comment) => {
        return {
            type:    types.CREATE_POST_ASYNC,
            payload: comment,
        };
    },
    fetchPostsAsync: () => {
        return {
            type: types.FETCH_POSTS_ASYNC,
        }
    },
    clearPosts: () => {
        return {
            type: types.CLEAR_POSTS,
        }
    },
    removePostAsync: (postId) => {
        return {
            type: types.REMOVE_POST_ASYNC,
            payload: postId
        }
    },
    removePost: (postId) => {
        return {
            type: types.REMOVE_POST,
            payload: postId
        }
    },
    likePostAsync: (postId) => {
        return {
            type: types.LIKE_POST_ASYNC,
            payload: postId
        }
    },
    unlikePostAsync: (postId) => {
        return {
            type: types.UNLIKE_POST_ASYNC,
            payload: postId
        }
    },
    likePost: (likePostData) => {
        return {
            type: types.LIKE_POST,
            payload: likePostData
        }
    },
    unlikePost: (likePostData) => {
        return {
            type: types.UNLIKE_POST,
            payload: likePostData
        }
    }
}
