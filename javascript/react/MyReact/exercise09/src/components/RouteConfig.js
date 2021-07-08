import React from "react";
import { Switch, Route } from "react-router-dom";

import PeopleListContainer from "../containers/PeopleListContainer";
import PersonFormNew from "../containers/PersonFormNew";
import PersonDetailContainer from "../containers/PersonDetailContainer";
import PersonFormEdit from "../containers/PersonFormEdit";

export default class RouteConfig extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={PeopleListContainer} />
                <Route path="/new" component={PersonFormNew} />
                <Route path="/person/:id" component={PersonDetailContainer} />
                {/* /edit/<id>にアクセスされたらPersonFormEditを表示する */}
                <Route path="/edit/:id" component={PersonFormEdit} />
            </Switch>
        );
    }
};
