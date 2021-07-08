// Node.jsではimportではなくrequireを使う
const express = require("express");
const cors = require("cors");
  
// expressフレームワークを利用したWebアプリケーションの作成
const app = express();
// CORS対応
app.use(cors());
  
// 「/」へのGETリクエスト時に返すデータ
const todos = [
    {id: 1, contents: "Reactを学ぶ"},
    {id: 2, contents: "Node.jsを学ぶ"},
    {id: 3, contents: "新しいビジネスを作る"},
];
  
/*
「/」にGETリクエストが送信された場合の処理
アクセスされるとリクエストを表すオブジェクト、レスポンスを表すオブジェクトを引数に
指定した関数オブジェクトが呼び出される
*/
app.get("/", (req, res) => {
    // レスポンスオブジェクトのjsonメソッドにより、オブジェクトをJSON形式で返す
    // ※setTimeoutは「時間のかかる処理」を模倣するために使用している
    setTimeout(() => res.json(todos), 5000);
});
  
// Webアプリを3000番ポートで起動する。起動後、渡した関数オブジェクトが呼び出される
app.listen(3000, () => console.log("Server started"));