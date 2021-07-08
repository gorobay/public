import { combineReducers } from "redux";
import {
    // ADD_POST,
    REQUEST_POSTS, RECEIVE_POSTS,
    ERROR_FETCH_POSTS,
    CHANGE_FORM_VALUE,
    SUCCESS_ADD_POST, ERROR_ADD_POST
} from "../actions";

const initialStatePosts = {
    posts: [],
    isFetchError: false
}
function posts(state = initialStatePosts, action) {
    switch (action.type) {
        // ADD_POST Actionがdispatchされたときにpostsにエントリを追加する処理を書いてください
        // case ADD_POST:
        //     return {
        //         ...state,
        //         posts: state.posts.concat({
        //             name: action.name,
        //             contents: action.contents
        //         })
        //     };

        // REQUEST_POSTSでは変更するStateはない
        case REQUEST_POSTS:
            return state;
        case RECEIVE_POSTS:
            /*
            現在のStateを基に新しいStateを作る
            スプレッド構文では現在のStateが展開される
            その後ろに新しいStateのプロパティを書くと同じプロパティ名のものは上書きされる
            */
            return {
                ...state,
                posts: action.posts,
                isFetchError: false
            };
        case ERROR_FETCH_POSTS:
            return {
                ...state,
                isFetchError: true
            };
        default:
            return state;
    }
}

const initialStateForm = {
    name: "",
    contents: "",
    isSendError: false
}
function form(state = initialStateForm, action) {
    switch (action.type) {
        case CHANGE_FORM_VALUE:
            return {
                ...state,
                [action.name]: action.value
            };
        case SUCCESS_ADD_POST:
            return {
                ...state,
                // 送信に成功した場合は入力をクリア
                name: "",
                contents: "",
                isSendError: false
            };
        case ERROR_ADD_POST:
            return {
                ...state,
                // 送信に失敗した場合は入力はそのまま
                isSendError: true
            };
        default:
            return state;
    }
}

export default combineReducers({
    posts,
    form
});
