import {
    SEND_PERSON_REQUEST,
    RECEIVE_PERSON_RESPONSE,
    ERROR_FETCH_PERSON,
    SUCCESS_DELETE_PERSON,
    ERROR_DELETE_PERSON
} from "../actions/person";

const initialState = {
    person: null,
    isFetching: false,
    isFetchError: false,
    active: false,
    isDeleteSuccess: false,
    isDeleteError: false
};
export function person(state = initialState, action) {
    switch (action.type) {
        case SEND_PERSON_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_PERSON_RESPONSE:
            return {
                ...state,
                person: action.person,
                active: true,
                isFetching: false,
                isFetchError: false
            };
        case ERROR_FETCH_PERSON:
            return {
                ...state,
                person: null,
                isFetching: false,
                isFetchError: true
            };
        /*
        SUCCESS_DELETE_PERSONの場合はactiveを無効にする
        isDeleteSuccess, isDeleteErrorも適切に設定する
        */
        case SUCCESS_DELETE_PERSON:
            return {
                ...state,
                active: false,
                isDeleteSuccess: true,
                isDeleteError: false
            };

        /*
        ERROR_DELETE_PERSONの場合は
        isDeleteSuccess, isDeleteErrorを適切に設定する
        */
        case ERROR_DELETE_PERSON:
            return {
                ...state,
                isDeleteSuccess: false,
                isDeleteError: true
            };
            
        default:
            return state;
    }
};
