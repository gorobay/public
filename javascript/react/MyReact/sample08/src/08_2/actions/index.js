import axios from "axios";
/*
export const ADD_POST = "ADD_POST";

export function addPost(text) {
    return {
        type: ADD_POST,
        text: text
    };
};
*/
// 第1項までで作成した部分

export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

function requestPosts() {
    return {
        type: REQUEST_POSTS
    };
}
  
function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts: posts
    };
}

export function fetchPosts() {
    return function(dispatch) {
        dispatch(requestPosts());
        axios.get("http://localhost:3000/")
        .then(res => {
            dispatch(receivePosts(res.data));
        })
        .catch(err => {
            console.log(err);
            dispatch(errorFetchPosts(err));
        });
    };
};

export const ERROR_FETCH_POSTS = "ERROR_FETCH_POSTS";

function errorFetchPosts(err) {
    return {
        type: ERROR_FETCH_POSTS,
        error: err
    }
}
// 第2項までで作成した部分

export const CHANGE_FORM_VALUE = "CHANGE_FORM_VALUE";

export function changeFormValue(name, value) {
    return {
        type: CHANGE_FORM_VALUE,
        name: name,
        value: value
    };
};
// 第3項までで作成した部分

export const SUCCESS_ADD_POST = "SUCCESS_ADD_POST";
export const ERROR_ADD_POST = "ERROR_ADD_POST";

function successAddPost() {
    return {
        type: SUCCESS_ADD_POST
    };
}
  
function errorAddPost(err) {
    return {
        type: ERROR_ADD_POST,
        error: err
    };
}

export function addPost(text) {
    return function(dispatch) {
        axios.post("http://localhost:3000/", {text: text})
        .then(() => {
            dispatch(successAddPost());
            // 送信に成功したらデータを取得し直す（fetchPostsをdispatchすることで取得が実行される）
            dispatch(fetchPosts());
        })
        .catch(err => {
            console.log(err);
            dispatch(errorAddPost(err));
        });
    };
};

