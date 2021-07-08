import React from "react";
import { connect } from "react-redux";

import { onShowPersonForm, changePersonFormValue, addPerson } from "../actions/personForm";

class PersonForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.onShowPersonForm();
    }

    handleChange(e) {
        this.props.changePersonFormValue(e.target.name, e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();

        const { name, age, gender } = this.props;
        this.props.addPerson(name, parseInt(age), gender);
    }

    renderNameField() {
        return (
            <div className="form-group row">
                <label htmlFor="name" className="col-1 col-form-label">
                    名前
                </label>
                <div className="col-4">
                    <input type="text" name="name" id="name" required
                        value={this.props.name}
                        onChange={this.handleChange}
                        className="form-control" />
                </div>
            </div>
        );
    }

    renderAgeField() {
        return (
            <div className="form-group row">
                <label htmlFor="age" className="col-1 col-form-label">
                    年齢
                </label>
                <div className="col-2">
                    <input type="number" name="age" id="age" required
                        value={this.props.age}
                        onChange={this.handleChange}
                        className="form-control" />
                </div>
            </div>
        );
    }

    renderGenderField() {
        return (
            <fieldset className="form-group">
                <div className="row">
                    <legend className="col-1 col-form-label">
                        性別
                    </legend>
                    <div className="col-11">
                        <div className="form-check">
                            <input type="radio" name="gender" id="gender_M" required
                                value="M"
                                checked={this.props.gender == 'M'}
                                onChange={this.handleChange}
                                className="form-check-input" />
                            <label htmlFor="gender_M" className="form-check-label">
                                男性
                            </label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="gender" id="gender_F"
                                value="F"
                                checked={this.props.gender == 'F'}
                                onChange={this.handleChange}
                                className="form-check-input" />
                            <label htmlFor="gender_F" className="form-check-label">
                                女性
                            </label>
                        </div>
                    </div>
                </div>
            </fieldset>
        );
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
            <form onSubmit={this.handleSubmit}>
                {this.renderNameField()}
                {this.renderAgeField()}
                {this.renderGenderField()}
                <div className="form-row">
                    <input type="submit" value="追加" className="btn btn-primary" />
                </div>
                {this.renderSendResult()}
            </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(PersonForm);
