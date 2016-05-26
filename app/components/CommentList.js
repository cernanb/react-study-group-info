'use strict'
import React from 'react'
import Comment from './Comment'

class CommentList extends React.Component {
  render() {

    var commentNodes = this.props.data.map((comment) => {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      )
    })

    return (
      <div className="commentList">
        <Comment author="Luke Ghenco">This is my first comment</Comment>
        <Comment author="Jordan Smith">This is *another* comment</Comment>
      </div>
    )
  }
}

export default CommentList
