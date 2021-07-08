import React from "react";
import ReactDOM from "react-dom";

class Todo extends React.Component {
    render() {
        return (
            <li>{this.props.contents}</li>
        );
    }
}

class TodoList extends React.Component {
    render() {
        /*
        const components = [];
        for (const todo of this.props.todos) {
            components.push(
                <Todo key={todo.id} contents={todo.contents} />
            );
        }
        */
        return (
            <ul>
                {this.props.todos.map(
                    todo => <Todo key={todo.id} contents={todo.contents} />
                )}
            </ul>
        );
    }
}

const todos = [
    {id: 1, contents: "Reactを学ぶ"},
    {id: 2, contents: "Node.jsを学ぶ"},
    {id: 3, contents: "新しいビジネスを作る"}
];
ReactDOM.render(
    <TodoList todos={todos} />,
    document.getElementById("root")
);