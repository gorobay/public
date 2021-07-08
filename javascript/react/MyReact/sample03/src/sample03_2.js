import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class Greeting extends React.Component {
    render() {
        return (
            <div>
                こんにちは、{this.props.name}さん<br/>
                {this.props.children}
            </div>
        );
    }
}

Greeting.propTypes = {
    name: PropTypes.string.isRequired
};

function Greeting2(props) {
    return (
        <div>
            こんにちは、{props.name}さん<br />
            {props.children}
        </div>
    )
}
Greeting2.propTypes = {
    name: PropTypes.string.isRequired
}

ReactDOM.render(
    <div>
        <Greeting name={"Win太郎"}>今日はいい天気ですね</Greeting>
        <Greeting2 name={"PC花子"}>あいにくの雨模様ですね</Greeting2>
    </div>,
    document.getElementById("root")
);