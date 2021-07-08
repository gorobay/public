import React from "react";
import ReactDOM from "react-dom";
  
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
  
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
  
    increment() {
        this.setState({count: this.state.count + 1});
    }
  
    decrement() {
        this.setState({count: this.state.count - 1});
    }
  
    render() {
        return (
            <div>
                <div>
                    <button type="button" onClick={this.increment}>
                        足す
                    </button>
                    <button type="button" onClick={this.decrement}>
                        引く
                    </button>
                </div>
                <div>
                    {this.state.count}
                </div>
            </div>
        );
    }
}
  
ReactDOM.render(
    <Counter />,
    document.getElementById("root")
);