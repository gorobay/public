import React from "react";
import ReactDOM from "react-dom";

// コンポーネント階層の一番上のBlogクラスを取り込み
import Blog from "./05_1/components/Blog";

// Blog, Article, UserInfoの定義は個別のファイルに移動

const title = "お役立ち情報";
// contents等は手間であればそのまま入力しなくても構いません
const articles = [
    {
        id: 1,
        title: "propsとstateの使い分け",
        author: {
            name: "織田一郎"
        },
        datetime: "2020-01-10 12:00",
        contents: `
            propsはコンポーネントの引数に使用します。書き換えはできません。
            stateはコンポーネントの状態に使用します。こちらは書き換え可能です。
            例えば・・・
        `
    },
    {
        id: 2,
        title: "mapメソッドを使いこなそう",
        author: {
            name: "木下三郎"
        },
        datetime: "2020-01-12 10:00",
        contents: `
            Reactで配列要素に対するコンポーネントを作る場合、mapメソッドを使うと便利です。
            例えば・・・
        `
    }
];
ReactDOM.render(
    <Blog title={title} articles={articles} />,
    document.getElementById("root")
);