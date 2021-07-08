import React from "react";
import PropTypes from "prop-types";

// コメントをヒントにNumberButtonクラスを完成させてください
// ※ヒントコメント以外のところも書かないとプログラムが正常動作しません
export default class NumberButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // propsで渡されるonClickを呼び出す。
        // 自身の数（propsのnumber）を引数として渡す。
        this.props.onClick(this.props.number);
    }

    render() {
        return (
            <button type="button" onClick={this.handleClick}>
                {this.props.number}
            </button>
        );
    }
}
NumberButton.propTypes = {
    onClick: PropTypes.func.isRequired
};
