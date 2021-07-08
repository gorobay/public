import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import App from "../components/App";
  
class AsyncApp extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
  
    render() {
        return (
            <App />
        )
    }
}

const mapDispatchToProps = { fetchPosts };
export default connect(null, mapDispatchToProps)(AsyncApp);