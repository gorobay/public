import React from "react";

// Blogクラスで使っているArticleクラスを取り込み
import Article from "./Article";

export default class Blog extends React.Component {
    render() {
        const articles = this.props.articles.map(
            // 繰り返し時のkey属性は親側で設定
            article => <Article key={article.id} article={article} />
        );
        return (
            <div>
                <header>
                    <h1>{this.props.title}</h1>
                </header>
                {articles}
            </div>
        );
    }
}