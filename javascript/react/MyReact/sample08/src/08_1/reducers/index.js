import { combineReducers } from "redux";
import { ADD_POST } from "../actions";
  
function posts(state = [], action) {
    switch (action.type) {
        case ADD_POST:
            return state.concat({text: action.text});
        default:
            return state;
    }
}
  
export default combineReducers({
    posts
});