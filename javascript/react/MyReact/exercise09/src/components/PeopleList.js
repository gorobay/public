import React from "react";
import { Link } from "react-router-dom";

// PeopleList内部での利用なのでこちらはexportしない
class PersonEntry extends React.Component {
    render() {
        return (
            <Link
                to={"/person/" + this.props.person.id}
                className="list-group-item list-group-item-action">
                {this.props.person.name}
            </Link>
        );
    }
}

export default class PeopleList extends React.Component {
    render() {
        return (
           <div className="list-group">
                {this.props.people.map(
                    person => <PersonEntry key={person.id} person={person} />
                )}
            </div>
        );
    }
}
