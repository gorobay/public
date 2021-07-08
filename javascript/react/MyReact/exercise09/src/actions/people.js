import axios from "axios";

export const SEND_PEOPLE_REQUEST = "SEND_PEOPLE_REQUEST";
export const RECEIVE_PEOPLE_RESPONSE = "RECEIVE_PEOPLE_RESPONSE";
export const ERROR_FETCH_PEOPLE = 'ERROR_FETCH_PEOPLE';

function sendPeopleRequest() {
    return {
        type: SEND_PEOPLE_REQUEST
    };
}

function receivePeopleResponse(people) {
    return {
        type: RECEIVE_PEOPLE_RESPONSE,
        people: people
    };
}

function errorFetchPeople(err) {
    return {
        type: ERROR_FETCH_PEOPLE,
        error: err
    };
}

export function fetchPeople() {
    return function(dispatch) {
        dispatch(sendPeopleRequest());
        axios.get('http://localhost:3000/')
        .then(res => {
            dispatch(receivePeopleResponse(res.data));
        })
        .catch(err => {
            dispatch(errorFetchPeople(err));
        });
    };
};

export function fetchPeopleIfNeeded() {
    return function(dispatch, getState) {
        // redux-thunkでは第2引数でStateを取得するgetState関数が渡される
        // これを利用し、取得を行っていない場合のみ取得する
        const state = getState();
        if (state.people.people.length == 0) {
            dispatch(fetchPeople());
        }
    };
};
