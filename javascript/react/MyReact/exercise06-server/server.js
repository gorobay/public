const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const people = [
    {id: 1, name: "織田秀長", address: "愛知県清須市"},
    {id: 2, name: "伊達政孝", address: "宮城県仙台市"},
    {id: 3, name: "島津義則", address: "鹿児島県鹿児島市"},
    {id: 4, name: "伊能忠司", address: "千葉県香取市"}
];

app.get("/", (req, res) => {
    setTimeout(() => res.json(people), 5000);
});

app.listen(3000, () => console.log("Server started"));
