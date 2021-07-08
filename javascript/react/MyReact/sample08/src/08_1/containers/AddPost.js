import React from "react";
import { connect } from "react-redux";
import { addPost } from "../actions";
  
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
        this.setState({[e.target.name]: e.target.value});
    }
  
    handleSubmit(e) {
        e.preventDefault();
        
        this.props.addPost(this.state.text);
        this.setState({text: ""});
    }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="text"
                    value={this.state.text}
                    onChange={this.handleChange} />
                <input type="submit" value="追加" />
            </form>
        );
    }
}
  
const mapDispatchToProps = { addPost };
// 前項では「接続した」コンポーネントを一度定数に代入したが今回は直接エクスポートしています
export default connect(null, mapDispatchToProps)(AddPost);