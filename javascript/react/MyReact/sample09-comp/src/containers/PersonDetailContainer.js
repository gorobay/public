import React from "react";
import { connect } from "react-redux";

import PersonDetail from "../components/PersonDetail";
import { fetchPerson } from "../actions/person";

class PersonDetailContainer extends React.Component {
    componentDidMount() {
        const { match } = this.props;
        this.props.fetchPerson(match.params.id);
    }

    render() {
        if (this.props.isFetchError) {
            return (
                <div className="card text-white bg-warning">
                    <div className="card-body">
                        データが取得できませんでした。
                    </div>
                </div>
            );
        }
        if (!this.props.person || this.props.isFetching) {
            return <div>詳細情報取得中…</div>;
        }
        return <PersonDetail person={this.props.person} />;
    }
}

function mapStateToProps(state) {
    return {
        person: state.person.person,
        isFetching: state.person.isFetching,
        isFetchError: state.person.isFetchError
    }
}
const mapDispatchToProps = {
    fetchPerson
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonDetailContainer);
