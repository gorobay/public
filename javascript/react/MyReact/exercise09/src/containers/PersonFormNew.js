import React from "react";
import { connect } from "react-redux";

import PersonForm from "../components/PersonForm";
import { onShowPersonForm, changePersonFormValue, addPerson } from "../actions/personForm";

class PersonFormNew extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.onShowPersonForm();
    }

    handleSubmit() {
        // PersonFormのsubmitボタンがクリックされたときの処理
        const { name, age, gender } = this.props;
        this.props.addPerson(name, parseInt(age), gender);
    }

    renderSendResult() {
        if (this.props.isSendSuccess) {
            return (
                <div className="card mt-3">
                    <div className="card-body">
                        送信に成功しました。
                    </div>
                </div>
            );
        }
        if (this.props.isSendError) {
            return (
                <div className="card text-white bg-warning mt-3">
                    <div className="card-body">
                        送信エラーが発生しました。
                    </div>
                </div>
            );
        }

        return <div />
    }

    render() {
        return (
            <div>
                <PersonForm
                    name={this.props.name}
                    age={this.props.age}
                    gender={this.props.gender}
                    submitLabel="追加"
                    // mapDispatchToPropsで設定されたものをPersonFormに渡す
                    changePersonFormValue={this.props.changePersonFormValue}
                    handleSubmit={this.handleSubmit} />
                {this.renderSendResult()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        name: state.personForm.name,
        age: state.personForm.age,
        gender: state.personForm.gender,
        isSendSuccess: state.personForm.isSendSuccess,
        isSendError: state.personForm.isSendError
    }
}
const mapDispatchToProps = {
    onShowPersonForm,
    changePersonFormValue,
    addPerson
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonFormNew);
