import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countdown: 10
        };
    }

    componentDidMount() {
        const handler = () => {
            const newCount = this.state.countdown - 1;
            this.setState({countdown: newCount});
            if (newCount == 0) {
                clearInterval(this.timerID);
            }
        };
        this.timerID = setInterval(handler, 1000);
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        if (this.state.countdown > 0) {
            return (
                <div>
                    しばらくお待ちください。<br />
                    後{this.state.countdown}秒
                </div>
            );
        } else {
            return (
                <div>
                    開始！
                </div>
            );
        }
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);