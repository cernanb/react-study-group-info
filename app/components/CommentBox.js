'use strict'
import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

class CommentBox extends React.Component {
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    )
  }
}

export default CommentBox
