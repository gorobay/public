import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types"

class Person extends React.Component {
    // Personクラスを正しく動作するように作成してください
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.address}</td>
            </tr>
        );
    }
}
Person.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
};

class PeopleTable extends React.Component {
    // PeopleTableクラスを正しく動作するように作成してください
    // ※一行の表示にはPersonコンポーネントを使用してください
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
                    {/* {this.props.people.map(
                        p => <Person key={p.id} name={p.name} address={p.address} />
                    )} */}
                </tbody>
            </table>
        );
    }
}

const people = [
    {id: 1, name: "織田秀長", address: "愛知県清須市"},
    {id: 2, name: "伊達政孝", address: "宮城県仙台市"},
    {id: 3, name: "島津義則", address: "鹿児島県鹿児島市"},
    {id: 4, name: "伊能忠司", address: "千葉県香取市"}
];
ReactDOM.render(
    <PeopleTable people={people} />,
    document.getElementById("root")
);
