import {
    ON_SHOW_PERSON_FORM,
    CHANGE_PERSON_FORM_VALUE,
    SUCCESS_SEND_PERSON,
    ERROR_SEND_PERSON,
    SEND_PERSON_REQUEST_FOR_UPDATE,
    RECEIVE_PERSON_RESPONSE_FOR_UPDATE,
    ERROR_FETCH_PERSON_FOR_UPDATE,
    SUCCESS_SEND_PERSON_FOR_UPDATE
} from "../actions/personForm";

const initialState = {
    name: "",
    age: "",
    gender: null,
    isSendSuccess: false,
    isSendError: false,
    isFetchError: false
}
export function personForm(state = initialState, action) {
    switch (action.type) {
        // 表示されたときに入力内容や通信結果をクリア
        case ON_SHOW_PERSON_FORM:
            return {
                ...state,
                name: "",
                age: "",
                gender: null,
                isSendSuccess: false,
                isSendError: false,
                isFetchError: false
            };
        case CHANGE_PERSON_FORM_VALUE:
            return {
                ...state,
                [action.name]: action.value
            };
        case SUCCESS_SEND_PERSON:
            return {
                ...state,
                name: "",
                age: "",
                gender: null,
                isSendSuccess: true,
                isSendError: false
            };
        case ERROR_SEND_PERSON:
            return {
                ...state,
                isSendSuccess: false,
                isSendError: true
            };
        // 処理なし
        case SEND_PERSON_REQUEST_FOR_UPDATE:
            return state;
        // 取得したデータをフィールドに設定
        case RECEIVE_PERSON_RESPONSE_FOR_UPDATE:
            return {
                ...state,
                // ここに必要なプロパティを書いてください
                name: action.person.name,
                age: action.person.age,
                gender: action.person.gender
            };
        case ERROR_FETCH_PERSON_FOR_UPDATE:
            return {
                ...state,
                isFetchError: true
            };
        // SUCCESS_SEND_PERSONとほぼ同じだがフィールドをクリアしない
        case SUCCESS_SEND_PERSON_FOR_UPDATE:
            return {
                ...state,
                isSendSuccess: true,
                isSendError: false
            };
        default:
            return state;
    }
};
