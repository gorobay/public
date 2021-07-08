import React from "react";

import NumberLine  from "./NumberLine";
import NumberButton from "./NumberButton";
import ResetButton  from "./ResetButton";

// コメントをヒントにAppクラスを完成させてください
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }

        this.handleNumberClick = this.handleNumberClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }

    makeValue(current, number) {
        // 入力は15桁まで（それ以上は無視）
        if (current.toString().length == 15) {
            return current;
        }

        // 現在値を10倍して（桁を一つ上げて）numberを足す
        return current * 10 + number;
    }

    handleNumberClick(number) {
        // makeValueメソッドを使って新しい値を作る
        // 新しい値をstateのvalueに設定する
        const newValue = this.makeValue(this.state.value, number)
        this.setState({value: newValue});
    }

    handleResetClick() {
        // stateのvalueを0に設定する
        this.setState({value: 0});
    }

    render() {
        const numberButtons = [];
        for (let i = 0; i < 10; i++) {
            numberButtons.push(
                // ボタンがクリックされたときにhandleNumberClickが呼ばれるようにする
                <NumberButton key={i} number={i} onClick={this.handleNumberClick}/>
            );
        }
        return (
            <div className="app">
                {/* NumberLineにはstateのvalueを渡す */}
                <NumberLine value={this.state.value} />
                <div>
                    {numberButtons}
                </div>
                <div>
                    {/* ボタンがクリックされたときにhandleResetClickが呼ばれるようにする */}
                    <ResetButton onClick={this.handleResetClick}/>
                </div>
            </div>
        );
    }
}
