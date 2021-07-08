import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavigationBar from "./NavigationBar";
import RouteConfig from "./RouteConfig";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <NavigationBar />

                <div className="container-fluid">
                    <div className="pt-3">
                        <RouteConfig />
                    </div>
                </div>
            </Router>
        );
    }
};
