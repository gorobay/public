import React from "react";

export default class StarCount extends React.Component {
    render() {
        // Stringオブジェクトのrepeatメソッドは自身を指定回数コピーし連結した文字列を返す
        return (
            <div>
                {"★".repeat(this.props.count)}
            </div>
        );
   }
}