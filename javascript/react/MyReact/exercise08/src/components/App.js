import React from "react";
import AddPost from "../containers/AddPost";
import PostListContainer from "../containers/PostListContainer";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <AddPost />
                <PostListContainer />
            </div>
        );
    }
}
