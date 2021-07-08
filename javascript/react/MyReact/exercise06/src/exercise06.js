import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Person extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.address}</td>
            </tr>
        );
    }
}

class PeopleTable extends React.Component {
    render() {
        const rows = this.props.people.map(
            p => <Person key={p.id} name={p.name} address={p.address} />
        );
        return (
            <table>
                <thead>
                    <tr>
                        <th>氏名</th>
                        <th>住所</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

// AjaxPeopleTableクラスを正しく動作するように作成してください
class AjaxPeopleTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: null
        };
    }

    componentDidMount() {
        axios.get("http://localhost:3000/")
        .then(res => {
            this.setState({people: res.data});
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        if (!this.state.people) {
            return (
                <div>
                    取得中…
                </div>
            )
        } else {
            return (
                <PeopleTable people={this.state.people} />
            );
        }
    }
}

ReactDOM.render(
    <AjaxPeopleTable />,
    document.getElementById("root")
);
