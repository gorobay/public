import React from "react";
import { connect } from "react-redux";

import PersonForm from "../components/PersonForm";
import { onShowPersonForm, changePersonFormValue, fetchPersonForUpdate, updatePerson } from "../actions/personForm";

class PersonFormEdit extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.onShowPersonForm();

        // idに対応するデータを取得
        const { match } = this.props;
        this.props.fetchPersonForUpdate(match.params.id);
    }

    handleSubmit() {
        // updatePersonを呼び出してデータを更新
        const { id } = this.props.match.params;
        const { name, age, gender } = this.props;
        this.props.updatePerson(id, name, parseInt(age), gender);
    }

    renderCommunicationResult() {
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
        if (this.props.isFetchError) {
            return (
                <div className="card text-white bg-warning mt-3">
                    <div className="card-body">
                        データが取得できませんでした。
                    </div>
                </div>
            )
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
                    submitLabel="更新"
                    changePersonFormValue={this.props.changePersonFormValue}
                    handleSubmit={this.handleSubmit} />
                {this.renderCommunicationResult()}
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
        isSendError: state.personForm.isSendError,
        isFetchError: state.personForm.isFetchError
    }
}
const mapDispatchToProps = {
    onShowPersonForm,
    fetchPersonForUpdate,
    changePersonFormValue,
    updatePerson
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonFormEdit);
