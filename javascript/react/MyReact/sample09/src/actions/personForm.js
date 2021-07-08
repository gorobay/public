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
        // name, age, genderを引数にサーバにデータを送信する
        // 送信に成功したら一覧データを再取得する（fetchPeopleをdispatchする）
        // 送信するJSONと引数名が同じなのでShorthand property namesが使える
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
