import React from "react";
import ReactDOM from "react-dom";

// Counterクラスを正しく動作するように作成してください
class Counter extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {count: 0, message: "Let's start!"};
        this.state = {count: 0};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        /*
        const newCount = this.state.count + 1;
        this.setState({count: newCount});

        if (newCount ==0) {
            this.setState({message: "Let's start!"});
        } else if (newCount % 3 ==0) {
            this.setState({message: "Fizz"});
        } else {
            this.setState({message: newCount});
        }
        */
        this.setState({count: this.state.count + 1});
    }

    render() {
        let message;
        if (this.state.count == 0) {
            message = "Let's start!";
        } else if (this.state.count % 3 == 0 && this.state.count % 5 == 0) {
            message = this.state.count + " FizzBuzz";
        } else if (this.state.count % 3 == 0) {
            message = this.state.count + " Fizz";
        } else if (this.state.count % 5 == 0) {
            message = this.state.count + " Buzz";
        } else {
            message = this.state.count;
        }        
        return (
            <div>
                <div>
                    {/* [ここにメッセージを表示します] */}
                    {/* {this.state.message} */}
                    {message}
                </div>
                <div>
                    <button type="button" onClick={this.handleClick}>
                        クリック
                    </button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Counter />,
    document.getElementById("root")
);
