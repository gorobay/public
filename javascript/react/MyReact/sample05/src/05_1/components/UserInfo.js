import React from "react";

export default class UserInfo extends React.Component {
    render() {
        return (
            <span>{this.props.user.name}</span>
        );
    }
}