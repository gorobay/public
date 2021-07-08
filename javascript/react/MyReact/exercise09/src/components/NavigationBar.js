import React from "react";
import { Link, NavLink } from "react-router-dom";

export default class NavigationBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">AdressBook</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-link">一覧</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/new" className="nav-link">追加</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}
