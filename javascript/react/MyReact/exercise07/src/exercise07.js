import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            name: "",
            contents: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getPosts();
    }

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
            name: this.state.name,
            contents: this.state.contents
        }
        // サーバにPOSTメソッドで送信
        axios.post("http://localhost:3000/", data)
        // 送信に成功したら
        .then(() => {
            // 入力されている内容をクリア
            // this.setState({name: ""});
            // this.setState({contents: ""});
            this.setState({name: "", contents: ""});

            // サーバからデータを再取得
            this.getPosts();
        })
        .catch(err => {
          console.log(err);
        });
    }

    render() {
        return (
            // 以下のJSXでは必要な属性が指定されていません
            // 正しく動作するように修正してください
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb10">
                        <label htmlFor="name">名前</label>
                        <input type="text" id="name" name="name" 
                            value={this.state.name}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <textarea name="contents" rows="5" cols="60" 
                            value={this.state.contents}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="submit" value="投稿" />
                    </div>
                </form>
                {this.renderPosts()}
            </div>
        );
    }

    renderPosts() {
        return this.state.posts.map(
            post => 
                <div key={post.id} className="post">
                    <div className="mb10">
                        <span className="datetime">
                            {post.datetime}
                        </span>
                        {post.name}
                    </div>
                    <div>
                        {this.renderContents(post.contents)}
                    </div>
                </div>
        )
    }

    // 書き込みを行に分けてbrを追加する
    renderContents(contents) {
        return contents.trim().split("\n").map(
            (line, i) => <span key={i}>{line}<br/></span>
        )
    }
}

ReactDOM.render(
    <Board />,
    document.getElementById("root")
);
