import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import PostList from '../components/post_list'
import { getPostList } from '../actions'

const PostListContainer = props => {
    return <PostList {...props} />
}

const mapStateToProps = state => {
    return {
        isLoadingGetPosts: state.getPostsReducer.isLoadingGetPosts,
        postListData: state.getPostsReducer.postListData,
    }
}

const mapDispatchToProps = {  
    getPostList
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostListContainer)) 