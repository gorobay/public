import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import PersonDetail from "../components/PersonDetail";
import { fetchPerson, deletePerson } from "../actions/person";

class PersonDetailContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        if (confirm("削除します。よろしいですか？")) {
            this.props.deletePerson(this.props.person.id)
        }
    }

    componentDidMount() {
        const { match } = this.props;
        this.props.fetchPerson(match.params.id);
    }

    renderDeleteResult() {
        if (this.props.isDeleteSuccess) {
            return (
                <div className="card mt-3">
                    <div className="card-body">
                        削除に成功しました。
                    </div>
                </div>
            );
        }
        if (this.props.isDeleteError) {
            return (
                <div className="card text-white bg-warning mt-3">
                    <div className="card-body">
                        削除に失敗しました。
                    </div>
                </div>
            );
        }

        return <div />
    }

    render() {
        if (this.props.isFetchError) {
            return (
                <div className="card text-white bg-warning">
                    <div className="card-body">
                        データが取得できませんでした。
                    </div>
                </div>
            )
        }
        if (!this.props.person || this.props.isFetching) {
            return <div>詳細情報取得中…</div>;
        }

        const editClasses = ["btn", "btn-primary", "mr-2"];
        if (!this.props.active) {
            // リンク（aタグ）にdisabledを付けると無効化される（Bootstrapの機能）
            editClasses.push("disabled");
        }
        return (
            <div>
                <PersonDetail person={this.props.person} />
                <div>
                    <Link
                        to={"/edit/" + this.props.person.id}
                        className={editClasses.join(" ")}>
                        編集
                    </Link>
                    <button
                        className="btn btn-danger"
                        onClick={this.handleDelete}
                        // activeのtrue/falseとボタンの有効無効を連動させる
                        disabled={!this.props.active} >
                        削除
                    </button>
                </div>
                {this.renderDeleteResult()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        person: state.person.person,
        isFetching: state.person.isFetching,
        isFetchError: state.person.isFetchError,
        active: state.person.active,
        isDeleteSuccess: state.person.isDeleteSuccess,
        isDeleteError: state.person.isDeleteError
    }
}
const mapDispatchToProps = {
    fetchPerson,
    deletePerson
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonDetailContainer);
