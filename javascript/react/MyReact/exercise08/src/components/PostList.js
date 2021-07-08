import React from "react";

export default class PostList extends React.Component {
    render() {
        if (this.props.isFetchError) {
            return (
                <p>データが取得できません。</p>
            );
        }
        return (
            <div>
                {this.renderPosts()}
            </div>
        );
    }

    renderPosts() {
        return this.props.posts.map(
            post => 
                <div key={post.id} className="post">
                    <div className="mb10">
                        <span className="datetime">
                            {post.datetime}
                        </span>
                        {post.name}
                    </div>
                    <div>
                        {this.renderContents(post.contents)}
                    </div>
                </div>
        )
    }

    // 書き込みを行に分けてbrを追加する
    renderContents(contents) {
        return contents.trim().split("\n").map(
            (line, i) => <span key={i}>{line}<br/></span>
        )
    }
};
