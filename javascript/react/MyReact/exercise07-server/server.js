const express = require("express");
const cors = require("cors");
const moment = require("moment");

const app = express();
app.use(cors());

// 送信されてきたJSONを処理するための機能を追加
app.use(express.json());

// 投稿された内容を保存する配列（サーバを終了すると消える）
const posts = [];

// 投稿されている書き込みの一覧を返す
app.get("/", (req, res) => res.json(posts));

// 投稿された書き込みに日時を追加して一覧に追加
app.post("/", (req, res) => {
    post = {
        // idは連番で割り当てる
        id: posts.length + 1,
        // req.bodyは送信されたJSON
        name: req.body.name,
        contents: req.body.contents,
        // momentは日時処理を便利に行えるライブラリ
        datetime: moment().format("YYYY-MM-DD HH:mm:ss")
    };
    posts.push(post);
    res.json({});
});

app.listen(3000, () => console.log("Server started"));
