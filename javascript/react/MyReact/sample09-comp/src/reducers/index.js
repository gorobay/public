import { combineReducers } from "redux";

import { personForm } from "./personForm";
import { people } from "./people";
import { person } from "./person";

export default combineReducers({
    personForm,
    people,
    person
});
