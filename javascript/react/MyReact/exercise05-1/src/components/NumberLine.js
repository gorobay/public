import React from "react";

export default class NumberLine extends React.Component {
    render() {
        return (
            <div className="number-line">
                {this.props.value}
            </div>
        );
    }
}
