import React from "react";
import ReactDOM from "react-dom";

// Calculatorクラスを正しく動作するように作成してください
class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.setNumber1 = this.setNumber.bind(this,  1);
        this.setNumber2 = this.setNumber.bind(this,  2);
        this.setNumber3 = this.setNumber.bind(this,  3);
        this.setNumber4 = this.setNumber.bind(this,  4);
        this.setNumber5 = this.setNumber.bind(this,  5);
        this.setNumber6 = this.setNumber.bind(this,  6);
        this.setNumber7 = this.setNumber.bind(this,  7);
        this.setNumber8 = this.setNumber.bind(this,  8);
        this.setNumber9 = this.setNumber.bind(this,  9);
        // for (let i = 1; i < 10; i++) {
        //     // プロパティは配列的にアクセスすることができる
        //     this[`setNumber${i}`] = this.setNumber.bind(this, i);
        // }

        this.calculateSum = this.calculateSum.bind(this);

        this.state = {
            number: 0,
            sum: 0
        };
    }

    setNumber(num) {
        this.setState({number: num});
        // プロパティと変数名が同じなので、this.setState({number})と書くことも可能
        // 参照：shorthand property names
    }

    calculateSum() {
        this.setState({sum: this.state.number + this.state.sum});
    }

    render() {
        return (
            <div>
                <div>
                    <button type="button" onClick={this.setNumber7}>7</button>
                    <button type="button" onClick={this.setNumber8}>8</button>
                    <button type="button" onClick={this.setNumber9}>9</button>
                </div>
                <div>
                    <button type="button" onClick={this.setNumber4}>4</button>
                    <button type="button" onClick={this.setNumber5}>5</button>
                    <button type="button" onClick={this.setNumber6}>6</button>
                </div>
                <div>
                    <button type="button" onClick={this.setNumber1}>1</button>
                    <button type="button" onClick={this.setNumber2}>2</button>
                    <button type="button" onClick={this.setNumber3}>3</button>
                </div>
                <div>
                    <button type="button" onClick={this.calculateSum}>+</button>
                </div>
                <table>
                    <tbody>
                        <tr><td>number:</td><td>{this.state.number}</td></tr>
                        <tr><td>sum:</td><td>{this.state.sum}</td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById("root")
);
