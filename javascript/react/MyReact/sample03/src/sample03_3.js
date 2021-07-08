import React from "react";
import ReactDOM from "react-dom";

// cssファイルを読み込む（これを書いておくことでwebpackにより取り込みが行われる）
import "../sample03_3.css";

class Greeting extends React.Component {
    render() {
        const h1_style = {
            color: "red",
            borderBottom: "1px solid #000"
        };
        return (
            <div>
                <h1 style={h1_style}>この要素は埋め込みで装飾されています。</h1>
                <p className={"frame"}>この要素はクラスで装飾されています。</p>
            </div>
        );
    }
}
  
ReactDOM.render(
    <Greeting />,
    document.getElementById("root")
);