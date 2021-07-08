import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
  
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.props.onChange(1);
    }
  
    decrement() {
        this.props.onChange(-1);
    }

    render() {
        return (
            <div className="counter">
                <button type="button" onClick={this.decrement}>
                    -
                </button>
                <span className="count">
                    {this.props.count}
                </span>
                <button type="button" onClick={this.increment}>
                    +
                </button>
            </div>
        );
    }
}