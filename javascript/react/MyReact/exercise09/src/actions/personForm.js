import axios from "axios";
import { fetchPeople } from "./people";

export const ON_SHOW_PERSON_FORM = "ON_SHOW_PERSON_FORM";
export const CHANGE_PERSON_FORM_VALUE = "CHANGE_PERSON_FORM_VALUE";
export const SUCCESS_SEND_PERSON = "SUCCESS_SEND_PERSON";
export const ERROR_SEND_PERSON = "ERROR_SEND_PERSON";

export function onShowPersonForm() {
    return {
        type: ON_SHOW_PERSON_FORM
    };
};

export function changePersonFormValue(name, value) {
    return {
        type: CHANGE_PERSON_FORM_VALUE,
        name: name,
        value: value
    };
};

function successSendPerson(id) {
    return {
        type: SUCCESS_SEND_PERSON,
        id: id
    };
}

function errorSendPerson(err) {
    return {
        type: ERROR_SEND_PERSON,
        error: err
    };
}

export function addPerson(name, age, gender) {
    return function(dispatch) {
        const person = {
            name, age, gender
        };
        axios.post("http://localhost:3000/", person)
        .then(res => {
            dispatch(successSendPerson(res.data.id));
            dispatch(fetchPeople());
        })
        .catch(err => {
            dispatch(errorSendPerson(err));
        });
    };
};

export const SEND_PERSON_REQUEST_FOR_UPDATE = "SEND_PERSON_REQUEST_FOR_UPDATE";
export const RECEIVE_PERSON_RESPONSE_FOR_UPDATE = "RECEIVE_PERSON_RESPONSE_FOR_UPDATE";
export const ERROR_FETCH_PERSON_FOR_UPDATE = "ERROR_FETCH_PERSON_FOR_UPDATE";

function sendPersonRequestForUpdate(id) {
    return {
        type: SEND_PERSON_REQUEST_FOR_UPDATE,
        id: id
    };
}

function receivePersonResponseForUpdate(person) {
    return {
        type: RECEIVE_PERSON_RESPONSE_FOR_UPDATE,
        person: person
    };
}

function errorFetchPersonForUpdate(err, id) {
    return {
        type: ERROR_FETCH_PERSON_FOR_UPDATE,
        error: err,
        id: id
    };
}

// fetchPersonとほぼ同じだがdispatchするActionと処理を行うReducerが異なる
export function fetchPersonForUpdate(id) {
    return function(dispatch) {
        dispatch(sendPersonRequestForUpdate(id));
        axios.get(`http://localhost:3000/${id}`)
        .then(res => {
            dispatch(receivePersonResponseForUpdate(res.data));
        })
        .catch(err => {
            dispatch(errorFetchPersonForUpdate(err, id));
        });
    };
};

export const SUCCESS_SEND_PERSON_FOR_UPDATE = "SUCCESS_SEND_PERSON_FOR_UPDATE";

function successSendPersonForUpdate(id) {
    return {
        type: SUCCESS_SEND_PERSON_FOR_UPDATE,
        id: id
    };
}

export function updatePerson(id, name, age, gender) {
    return function(dispatch) {
        const person = {
            name, age, gender
        };
        // 新規作成とは異なり、指定idに対してPUTを行う
        axios.put(`http://localhost:3000/${id}`, person)
        .then(() => {
            dispatch(successSendPersonForUpdate(id));
            dispatch(fetchPeople());
        })
        .catch(err => {
            dispatch(errorSendPerson(err));
        });
    };
};
