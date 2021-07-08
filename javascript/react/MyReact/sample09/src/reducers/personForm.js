import {
    ON_SHOW_PERSON_FORM,
    CHANGE_PERSON_FORM_VALUE,
    SUCCESS_SEND_PERSON,
    ERROR_SEND_PERSON
} from "../actions/personForm";

const initialState = {
    name: "",
    age: "",
    gender: null,
    isSendSuccess: false,
    isSendError: false
}
export function personForm(state = initialState, action) {
    switch (action.type) {
        // 表示されたときに前回の送信成功／失敗をクリア
        case ON_SHOW_PERSON_FORM:
            return {
                ...state,
                isSendSuccess: false,
                isSendError: false
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
        default:
            return state;
    }
};
