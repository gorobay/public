import React from "react";
import ReactDOM from "react-dom";

/*
const element1 = React.createElement("h1", {}, "はじめてのReact");
ReactDOM.render(
    element1,
    document.getElementById("root")
);
*/

const element =
<div>
    <h1>はじめてのReact</h1>
    <p>このページはReactで作成されています。</p>
</div>
ReactDOM.render(
    element,
    document.getElementById("root")
);