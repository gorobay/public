import React from "react";
import Counter from './Counter';
import StarCount from './StarCount';
  
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};

        this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(diff) {
        let newCount = this.state.count + diff;
        if (newCount < 0) {
            newCount = 0;
        }
        this.setState({count: newCount});
    }

    render() {
        return (
            <div>
                <Counter
                    count={this.state.count}
                    onChange={this.handleChange}
                />
                <StarCount
                    count={this.state.count}
                />
            </div>
        );
    }
}