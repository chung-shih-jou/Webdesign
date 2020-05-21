import React, { Component } from 'react'
import { Button} from 'reactstrap'
import{ Mutation } from 'react-apollo'
import AddComment from './AddComment'
import './comment.css'
import { GoCommentDiscussion } from "react-icons/go"
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  DELETE_COMMENT_MUTATION
} from '../graphql'

class Comment extends Component {
  constructor(props){
    super(props)
    this.state = {clickOrNot: false, commentid: ""}
  }
  handleclick = () =>{
    let clickOrNot = this.state.clickOrNot
    if (clickOrNot)
      clickOrNot = false
    else
      clickOrNot = true
    
      this.setState({clickOrNot: clickOrNot})

  }
  handleDeleteComment =  (e) =>{

    const ID = e
    if (!ID ) return
    console.log(ID, 'Delete')

    this.deleteComment({
      variables: {
        id: ID
      }
    })
  }
  render() {
    const comments = this.props.comments
    // console.log(comments)
    const commentbody = (index) =>{
      if (this.state.clickOrNot){
        const show = comments.map((comment, id) => (
          <p key={id} className="p"> { comment.author.name }: {comment.text}
          <Mutation mutation={DELETE_COMMENT_MUTATION}>
            {deleteComment => {
              this.deleteComment = deleteComment
              return (
                <RiDeleteBin6Line className="btn_delete" onClick={() => this.handleDeleteComment(comment.id)}/>
              )
            }}
          </Mutation>
          </p>
        ))
        return (
          <div key={index} className="b">
            <br/>
            {show}
            <AddComment postid = {this.props.postid}/>
            <Button className="but" type="submit" size="sm"  onClick={this.handleclick}> <GoCommentDiscussion/>Don't show anymore...</Button>
            <br/>
          </div>
        )
        

        }
      else{
        return (
          <Button className="but" size="sm" onClick={this.handleclick}><GoCommentDiscussion/>Show comments...</Button>
        )
      }
    }
      return(
        <>
        {commentbody()}
        </>
      )
    }
    
  }

export default Comment
