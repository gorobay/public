import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavigationBar from "./NavigationBar";
import RouteConfig from "./RouteConfig";

export default class App extends React.Component {
    render() {
        // 画面全体の構成
        // ナビゲーションバーとルーティング設定を記述
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
