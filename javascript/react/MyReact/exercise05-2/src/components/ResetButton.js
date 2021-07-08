import React from "react";
import PropTypes from "prop-types";

// コメントをヒントにResetButtonクラスを完成させてください
// ※ヒントコメント以外のところも書かないとプログラムが正常動作しません
export default class ResetButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        // propsで渡されるonClickを呼び出す（引数なし）
        this.props.onClick();
    }

    render() {
        return (
            <button type="button" onClick={this.handleClick}>
                Reset
            </button>
        );
    }
}
ResetButton.propTypes = {
    onClick: PropTypes.func.isRequired
};
