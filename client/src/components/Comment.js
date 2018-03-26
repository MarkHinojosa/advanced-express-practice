import React from 'react';

class Comment extends React.Component {

  componentDidMount() {
    this.props.getComment(this.props.match.params.commentId);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Comment Body: {this.props.comment.body}</h1>
      </div>
    )
  }
}

export default Comment;