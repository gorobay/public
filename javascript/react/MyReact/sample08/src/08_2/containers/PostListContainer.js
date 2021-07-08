import { connect } from "react-redux";
import PostList from "../components/PostList";
  
function mapStateToProps(state) {
    return {
        posts: state.posts.posts,
        isFetchError: state.posts.isFetchError
    }
}
  
const PostListContainer = connect(mapStateToProps)(PostList);
export default PostListContainer;