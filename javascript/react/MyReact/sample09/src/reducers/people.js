import {
    RECEIVE_PEOPLE_RESPONSE,
    ERROR_FETCH_PEOPLE,
    SEND_PEOPLE_REQUEST
} from "../actions/people";

const initialState = {
    people: [],
    isFetching: false,
    isFetchError: false
};
export function people(state = initialState, action) {
    switch (action.type) {
        case SEND_PEOPLE_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_PEOPLE_RESPONSE:
            return {
                ...state,
                people: action.people,
                isFetching: false,
                isFetchError: false
            };
        case ERROR_FETCH_PEOPLE:
            return {
                ...state,
                people: [],
                isFetching: false,
                isFetchError: true
            };
        default:
            return state;
    }
};
