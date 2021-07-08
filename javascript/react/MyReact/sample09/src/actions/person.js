import axios from "axios";

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
        // 指定idに対応するデータを取得する
        dispatch(sendPersonRequest(id));
        // テンプレート文字列でidを埋め込み
        axios.get(`http://localhost:3000/${id}`)
        .then(res => {
            dispatch(receivePersonResponse(res.data));
        })
        .catch(err => {
            dispatch(errorFetchPerson(err, id));
        });
    };
};
