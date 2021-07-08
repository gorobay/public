import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
  
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [], // サーバから取得する書き込み一覧
            text: ""   // 現在の入力内容
        };
  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    componentDidMount() {
        // ページが表示されたらサーバから書き込み一覧を取得する
        this.getPosts();
    }
  
    // 複数個所で取得処理を行うのでメソッド化
    getPosts() {
        axios.get("http://localhost:3000/")
        .then(res => {
            this.setState({posts: res.data});
        })
        .catch(err => {
          console.log(err);
        });
    }
  
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
  
    handleSubmit(e) {
        // ブラウザがフォームを送信（同期通信）しようとするのを止める
        e.preventDefault();
        
        // サーバに送信するデータを用意
        const data = {
            text: this.state.text
        }
        // サーバにPOSTメソッドで送信
        axios.post("http://localhost:3000/", data)
        // 送信に成功したら
        .then(() => {
            // 入力されている内容をクリア
            this.setState({text: ""});
            // サーバからデータを再取得
            this.getPosts();
        })
        .catch(err => {
          console.log(err);
        });
    }
  
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="text"
                        value={this.state.text}
                        onChange={this.handleChange} />
                    <input type="submit" value="追加" />
                </form>
                <ul>
                    {this.state.posts.map(
                        (post, i) => 
                            <li key={i}>
                                <span className="datetime">
                                    {post.datetime}
                                </span>
                                {post.text}
                            </li>
                    )}
                </ul>
            </div>
        );
    }
}
  
ReactDOM.render(
    <Board />,
    document.getElementById("root")
);