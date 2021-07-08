import axios from "axios";
import { fetchPeople } from "./people";

export const SEND_PERSON_REQUEST = "SEND_PERSON_REQUEST";
export const RECEIVE_PERSON_RESPONSE = "RECEIVE_PERSON_RESPONSE";
export const ERROR_FETCH_PERSON = "ERROR_FETCH_PERSON";

function sendPersonRequest(id) {
    return {
        type: SEND_PERSON_REQUEST,
        id: id
    };
}

function receivePersonResponse(person) {
    return {
        type: RECEIVE_PERSON_RESPONSE,
        person: person
    };
}

function errorFetchPerson(err, id) {
    return {
        type: ERROR_FETCH_PERSON,
        error: err,
        id: id
    };
}

export function fetchPerson(id) {
    return function(dispatch) {
        dispatch(sendPersonRequest(id));
        axios.get(`http://localhost:3000/${id}`)
        .then(res => {
            dispatch(receivePersonResponse(res.data));
        })
        .catch(err => {
            dispatch(errorFetchPerson(err, id));
        });
    };
};

export const SUCCESS_DELETE_PERSON = "SUCCESS_DELETE_PERSON";
export const ERROR_DELETE_PERSON = "ERROR_DELETE_PERSON";

function successDeletePerson(id) {
    return {
        type: SUCCESS_DELETE_PERSON,
        id: id
    };
}

function errorDeletePerson(err) {
    return {
        type: ERROR_DELETE_PERSON,
        error: err
    };
}

export function deletePerson(id) {
    return function(dispatch) {
        // 指定idに対応するパスにDELETEを送信（axios.deleteメソッドを使用）
        // 成功したらsuccessDeletePersonとfetchPeopleをdispatch
        // 失敗した場合はerrorDeletePersonをdispatch
        axios.delete(`http://localhost:3000/${id}`)
        .then(() => {
            dispatch(successDeletePerson(id));
            dispatch(fetchPeople());
        })
        .catch(err => {
            dispatch(errorDeletePerson(err));
        });
    }
};
