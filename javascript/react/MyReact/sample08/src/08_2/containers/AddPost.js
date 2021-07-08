import React from "react";
import { connect } from "react-redux";
import { addPost, changeFormValue } from "../actions";
  
class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
        // this.setState({[e.target.name]: e.target.value});
        this.props.changeFormValue(e.target.name, e.target.value);
    }
  
    handleSubmit(e) {
        e.preventDefault();
        /*        
        this.props.addPost(this.state.text);
        this.setState({text: ""});
        */
        // 呼び出されるaddPostは次項で改造します
        this.props.addPost(this.props.text);
    }
  
    render() {
        return (
            // 全体をdivで囲みエラーメッセージの枠を含める
            <div>
                <form onSubmit={this.handleSubmit}>
                   <input type="text" name="text"
                        // stateではなく渡されたpropsを使うようにする
                        // value={this.state.text}
                        value={this.props.text}
                        onChange={this.handleChange} />
                    <input type="submit" value="追加" />
                </form>
                {/* isSendErrorがtrueの場合に表示される（{}内がfalseだと無視される） */}
                {this.props.isSendError && <p>送信エラー</p>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        text: state.form.text,
        isSendError: state.form.isSendError
    }
}
const mapDispatchToProps = { addPost, changeFormValue };
// 前項では「接続した」コンポーネントを一度定数に代入したが今回は直接エクスポートしています
// export default connect(null, mapDispatchToProps)(AddPost);
// ↓mapStateToProps追加
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);