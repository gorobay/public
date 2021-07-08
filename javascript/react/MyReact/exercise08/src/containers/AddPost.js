import React from "react";
import { connect } from "react-redux";
import { addPost, changeFormValue } from "../actions";

class AddPost extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.props.changeFormValue(e.target.name, e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        
        this.props.addPost(this.props.name, this.props.contents);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb10">
                        <label htmlFor="name">名前</label>
                        <input type="text" id="name" name="name"
                            value={this.props.name}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <textarea name="contents" rows="5" cols="60"
                            value={this.props.contents}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="submit" value="投稿" />
                    </div>
                </form>
                {this.props.isSendError && <p>送信エラー</p>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        name: state.form.name,
        contents: state.form.contents,
        isSendError: state.form.isSendError
    }
}
// mapDiapatchToPropsを定義してください。
// AddPostコンポーネントにはaddPostとchangeFormValueを渡します。
const mapDispatchToProps = { addPost, changeFormValue };

// mapStateToProps, mapDispatchToProps, AddPostを接続し、それをデフォルトエクスポートしてください
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);