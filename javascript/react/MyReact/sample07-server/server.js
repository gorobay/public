const express = require("express");
const cors = require("cors");
const moment = require("moment");

const app = express();
app.use(cors());

// 送信されてきたJSONを処理するための機能を追加
app.use(express.json());

// 投稿された内容を保存する配列（サーバを終了すると消える）
const posts = [];

// 投稿されているテキストの一覧を返す
app.get("/", (req, res) => res.json(posts));

// 投稿されたテキストを日時を追加して一覧に追加
app.post("/", (req, res) => {
    post = {
        // req.bodyは送信されたJSON
        text: req.body.text,
        // momentは日時処理を便利に行えるライブラリ
        datetime: moment().format("YYYY-MM-DD HH:mm:ss")
    };
    posts.push(post);
    res.json({});
});

app.listen(3000, () => console.log("Server started"));
