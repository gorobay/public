import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
  
class Todo extends React.Component {
    render() {
        return (
            <li>{this.props.contents}</li>
        );
    }
}
  
class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map(
                    todo => <Todo key={todo.id} contents={todo.contents} />
                )}
            </ul>
        );
    }
}
  
// 既存のTodoListクラスを使い、表示データはサーバから取得する
class AjaxTodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: null
        };
    }
  
    componentDidMount() {
        axios.get("http://localhost:3000/")
        .then(res => {
            this.setState({todos: res.data});
        })
        .catch(err => {
            console.log(err);
        });
    }
  
    render() {
        if (!this.state.todos) {
            return (
                <div>
                    取得中…
                </div>
            )
        } else {
            return (
                <TodoList todos={this.state.todos} />
            );
        }
    }
}
  
ReactDOM.render(
    <AjaxTodoList />,
    document.getElementById("root")
);