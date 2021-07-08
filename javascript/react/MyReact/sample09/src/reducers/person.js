import {
    SEND_PERSON_REQUEST,
    RECEIVE_PERSON_RESPONSE,
    ERROR_FETCH_PERSON
} from "../actions/person";

const initialState = {
    person: null,
    isFetching: false,
    isFetchError: false
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
        default:
            return state;
    }
};
