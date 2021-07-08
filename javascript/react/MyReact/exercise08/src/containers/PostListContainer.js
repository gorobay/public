import { connect } from "react-redux";
import PostList from "../components/PostList";

function mapStateToProps(state) {
    return {
        posts: state.posts.posts,
        isFetchError: state.posts.isFetchError
    }
}

// mapStateToPropsとPostListを接続してPostListContainerを定義してください
const PostListContainer = connect(mapStateToProps)(PostList)
export default PostListContainer;
