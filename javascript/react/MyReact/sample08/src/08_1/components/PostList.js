import React from "react";
  
export default class PostList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.posts.map(
                    (post, i) => 
                        <li key={i}>
                            <span className="datetime">
                                {post.datetime}
                            </span>
                            {post.text}
                        </li>
                )}
            </ul>
        );
    }
};