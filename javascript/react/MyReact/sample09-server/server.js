const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let items = [];
let nextId = 1;

// 一覧。IDと名前だけを返す
app.get("/", (req, res) => {
    res.json(items.map(e => { return {id: e.id, name: e.name} }));
});

// 新規作成
app.post("/", (req, res) => {
    const data = req.body;
    data.id = nextId;
    nextId++;
    items.push(data);
    res.json({id: data.id});
});

// 指定IDに対する全情報を返す
app.get("/:id", (req, res) => {
    const id = req.params.id;
    const data = items.find(e => e.id == id);
    if (data) {
        res.json(data);
    } else {
        res.status(404).json({});
    }
});

// 指定IDに対するエントリを削除する
app.delete("/:id", (req, res) => {
    const id = req.params.id;
    if (items.find(e => e.id == id)) {
        // 指定id以外の新配列を作成
        const newItems = items.filter(e => e.id != id);
        items = newItems;
        res.end();
    } else {
        res.status(404).end();
    }
});

// 指定IDの要素を更新する
app.put("/:id", (req, res) => {
    const id = req.params.id;
    const data = items.find(e => e.id == id);
    if (data) {
        // assignを使用してオブジェクト自体を書き換える
        Object.assign(data, req.body);
        res.end();
    } else {
        res.status(404).end();
    }
});

app.listen(3000, () => console.log("Server started"));
