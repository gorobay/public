export const ADD_POST = "ADD_POST";
  
export function addPost(text) {
    return {
        type: ADD_POST,
        text: text
    };
};