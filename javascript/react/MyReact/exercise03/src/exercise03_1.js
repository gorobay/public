import React from "react";
import ReactDOM from "react-dom";

class SelfIntroduction extends React.Component {
    // SelfIntroductionクラスを正しく動作するように作成してください
    render() {
        return (
            <p className={this.props.class}>
                初めまして、私の名前は{this.props.name}です。<br/>
                出身は{this.props.birthplace}です。                
            </p>
        )
    }
}

ReactDOM.render(
    <div>
        <SelfIntroduction class={"example1"} name={"Win太郎"} birthplace={"京都府"} />
        <SelfIntroduction class={"example2"} name={"PC花子"}  birthplace={"神奈川県"} />
    </div>,
    document.getElementById("root")
);
