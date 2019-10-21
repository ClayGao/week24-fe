import React from 'react';
import { connect } from 'react-redux'
import Post from '../components/post'
import * as actions from '../actions'

const PostContainer = props => {
    return <Post {...props} />
}

const mapStateToProps = state => {
    return {
        isEdited: state.editSinglePostReducer.isEdited,
        isDeleted: state.editSinglePostReducer.isDeleted,
        isLoadingSinglePost: state.getSinglePostReducer.isLoadingSinglePost,
        singlePostData: state.getSinglePostReducer.singlePostData,
        isEditing: state.editSinglePostReducer.isEditing,
        title: state.editSinglePostReducer.title,
        body: state.editSinglePostReducer.body
    }
}

const mapDispatchToProps = dispatch => {
    return {             
        getActiveSinglePost: (postId) => {
            dispatch(actions.getSinglePost(postId))
        },
        deleteActiveSinglePost: (postId) => {
            dispatch(actions.deleteSinglePost(postId))
        },
        editActiveSinglePost: (title, body) => {
            dispatch(actions.beginEditSinglePost(title, body))
        },
        completeEditActiveSinglePost: (postId, title, body) => {
            if(!title || !body) return alert('不可空白唷!')
            dispatch(actions.editSinglePost(postId, title, body))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)