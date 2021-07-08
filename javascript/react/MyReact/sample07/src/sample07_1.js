import React from "react";
import ReactDOM from "react-dom";
  
class InquiryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            mail: "",
            contents: "",
            gender: null, // 初めはどちらも選択されていないことを示すためにnullを設定
            interests: [],
            age: "",
        };
  
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    }
  
    handleChange(e) {
        // this.setState({name: e.target.value});
        // 「男性」がクリックされると、e.target.nameは"gender"、e.target.valueは"M"
        this.setState({[e.target.name]: e.target.value});
    }
  
    handleChangeCheckbox(e) {
        // 別配列を作成（詳しくは後述）
        const group = [...this.state[e.target.name]];
        if (e.target.checked) {
            group.push(e.target.value);
        } else {
            // まずindexOfメソッドで選択解除された項目の配列上の位置を取得する
            // 次にその位置を利用してspliceメソッドで選択解除された項目の文字列を削除する
            group.splice(group.indexOf(e.target.value), 1);
        }
        this.setState({[e.target.name]: group});
    }

    render() {
        return (
            <form>
                <div>
                    <label htmlFor="name">
                        お名前：
                    </label>
                    <input type="text" id="name" name="name"
                        value={this.state.name}
                        onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="mail">
                        メール：
                    </label>
                    <input type="email" id="mail" name="mail"
                        value={this.state.mail}
                        onChange={this.handleChange} />
                </div>
                <div>
                    <label>
                        <input type="radio" name="gender"
                            value="M"
                            checked={this.state.gender === "M"}
                            onChange={this.handleChange} />
                        男性
                    </label>
                    <label>
                        <input type="radio" name="gender" 
                            value="F"
                            checked={this.state.gender === "F"}
                            onChange={this.handleChange} />
                        女性
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="interests"
                        value="JavaScript"
                            checked={this.state.interests.includes("JavaScript")}
                            onChange={this.handleChangeCheckbox} />
                        JavaScript
                    </label>
                    <label>
                        <input type="checkbox" name="interests"
                            value="Python"
                            checked={this.state.interests.includes("Python")}
                            onChange={this.handleChangeCheckbox} />
                        Python
                    </label>
                </div>
                <div>
                    <label htmlFor="age">
                        ご年齢：
                    </label>
                    <select id="age" name="age"
                        value={this.state.age}
                        onChange={this.handleChange}>
                        <option></option>
                        <option value="10s">10代</option>
                        <option value="20s">20代</option>
                        <option value="30s">30代</option>
                        <option value="40s">40代</option>
                        <option value="50s">50代</option>
                        <option value="over60">60代以上</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="contents">
                        お問い合わせ内容
                    </label>
                    <br/>
                    <textarea id="contents" name="contents" rows="5" cols="60"
                        value={this.state.contents}
                        onChange={this.handleChange} />
                </div>
                <div>
                    <input type="submit" value="追加" />
                </div>
            </form>
        );
    }
}
  
ReactDOM.render(
    <InquiryForm />,
    document.getElementById("root")
);