import React from "react";

export default class PersonDetail extends React.Component {
    render() {
        // データと表示の対応表
        const GENDER_TABLE = {
            M: "男性",
            F: "女性"
        };
        return (
            <table className="table">
                <tbody>
                    <tr>
                        <th width="20%">名前</th>
                        <td>{this.props.person.name}</td>
                    </tr>
                    <tr>
                        <th>年齢</th>
                        <td>{this.props.person.age}</td>
                    </tr>
                    <tr>
                        <th>性別</th>
                        <td>{GENDER_TABLE[this.props.person.gender]}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
};
