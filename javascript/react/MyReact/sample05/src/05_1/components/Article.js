import React from "react";

// Articleクラスで使っているUserInfoクラスを取り込み
import UserInfo from "./UserInfo";

export default class Article extends React.Component {
    render() {
        // propsを一度代入することで元のJSX記述を使い回せる
        const article = this.props.article;
        return (
            // この部分は元のプログラムからカット＆ペーストする。key属性は削除
            <article>
                <h2>{article.title}</h2>
                <div>
                    {/* 執筆者情報をUserInfoに分ける */}
                    執筆者：<UserInfo user={article.author} />
                </div>
                <div>
                    投稿日：{article.datetime}
                </div>
                <p>
                    {article.contents}
                </p>
            </article>
        );
    }
}