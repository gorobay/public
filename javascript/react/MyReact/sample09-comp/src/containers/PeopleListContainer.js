import React from "react";
import { connect } from "react-redux";

import PeopleList from "../components/PeopleList";
import { fetchPeopleIfNeeded } from "../actions/people";

class PeopleListContainer extends React.Component {
    componentDidMount() {
        this.props.fetchPeopleIfNeeded();
    }

    render() {
        if (this.props.isFetching) {
            return <div>名簿一覧取得中…</div>;
        }
        if (this.props.isFetchError) {
            return (
                <div className="card text-white bg-warning">
                    <div className="card-body">
                        データが取得できませんでした。
                    </div>
                </div>
            );
        }
        return <PeopleList people={this.props.people} />;
    }
}

function mapStateToProps(state) {
    return {
        people: state.people.people,
        isFetching: state.people.isFetching,
        isFetchError: state.people.isFetchError
    }
}
const mapDispatchToProps = {
    fetchPeopleIfNeeded
};
export default connect(mapStateToProps, mapDispatchToProps)(PeopleListContainer);
