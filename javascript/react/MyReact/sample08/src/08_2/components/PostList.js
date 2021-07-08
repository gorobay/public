import React from "react";
  
export default class PostList extends React.Component {
    render() {
        if (this.props.isFetchError) {
            return (
                <p>データが取得できません。</p>
            );
        }
        
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