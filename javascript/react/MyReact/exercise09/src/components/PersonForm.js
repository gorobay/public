import React from "react";

// 新規作成と編集でコンポーネントを使い回せるように汎用化したPersonForm
export default class PersonForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.props.changePersonFormValue(e.target.name, e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        // 直接addPersonするのではなく親コンポーネントに処理を任せる
        this.props.handleSubmit();
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

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderNameField()}
                {this.renderAgeField()}
                {this.renderGenderField()}
                <div className="form-row">
                    <input type="submit" value={this.props.submitLabel} className="btn btn-primary" />
                </div>
            </form>
        );
    }
};
