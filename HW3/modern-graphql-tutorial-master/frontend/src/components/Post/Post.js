
import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo' 
import { Input, Card, CardHeader, CardFooter, CardBody } from 'reactstrap'
import {
  COMMENTS_SUBSCRIPTION,
  COMMENTLIST_QUERY,
  DELETE_USER_MUTATION,
  DELETE_POST_MUTATION,
  UPDATE_POST_MUTATION 
} from '../../graphql'
import Comment from '../Comment'
import classes from '../../containers/App/App.module.css'
import { RiMagicLine} from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";
import { FiDelete } from "react-icons/fi";
// import Mutation from '../../../../backend/src/resolvers/Mutation';

class Post extends Component{
  constructor(props){
    super(props)
    this.state = {clickOrNot: false, postUpdateOrNot: false, ID:"", formTitle: "", formBody: ""}
  }
  deleteFormAuthor = e => {
    e.preventDefault()

    this.deleteFormAuthor({
      variables:{
        query:this.state.ID
      }
    })
  }
  handleclick = () =>{
    let clickOrNot = this.state.clickOrNot
    if (clickOrNot)
      clickOrNot = false
    else
      clickOrNot = true
    
      this.setState({clickOrNot: clickOrNot})

  }

  handleDeleteAuthor = (e) =>{
    e.preventDefault()
    const userId = this.props.userid
    if (!userId ) return
    console.log(userId, 'Delete userId')

    this.deleteUser({
      variables: {
        id: userId
      }
    })
  }

  handleDeletePost = (id) =>{
    const postId = id
    if (!postId) return
    console.log(postId, 'delete postId')

    this.deletePost({
      variables:{
        id: postId
      }
    })
  }

  handleUpdatePost = (id, title, body) =>{
    console.log(id, title, body)
    let postUpdateOrNot = this.state.postUpdateOrNot
    const {ID, formTitle, formBody} = this.state
    console.log(formTitle, formBody, ID, this.props.userid)

    if (postUpdateOrNot)
      {postUpdateOrNot = false
    if (!title) return
    
      this.updatePost({
        variables:{
          id: ID,
          title: formTitle,
          body: formBody,
          published: true,
          authorId: this.props.userid
        }
      })}
    else
      postUpdateOrNot = true
    
    
    this.setState({postUpdateOrNot: postUpdateOrNot, ID: id, formTitle: title, formBody: body})
  }

  render() {
    
    const posts = this.props.posts
    const postnum = ''+ posts.length
    const postbody = () => {
      if (this.state.clickOrNot){
        return posts.map((post, index) => {
            const query = post.id
            const updatePost = () =>{
              if (this.state.postUpdateOrNot){
                return(
                  <Mutation mutation={UPDATE_POST_MUTATION}>
                  {updatePost =>{
                    this.updatePost = updatePost
                    if (post.id == this.state.ID)
                      return(
                        <Input 
                          name="updateTitle"
                          value={this.state.formTitle}
                          id="updateTitle"
                          onKeyPress={()=> this.handleUpdatePost(this.state.ID, this.state.formTitle, this.state.formBody)}
                          onChange={e =>
                            this.setState({ formTitle: e.target.value })
                          }/>
                        )
                    else
                      return (
                        <b className={classes.subtitle} onClick={() => this.handleUpdatePost(post.id, post.title, post.body)}><RiMagicLine/>{post.title}
                        <Mutation mutation={DELETE_POST_MUTATION}>
                        {deletePost=>{
                          this.deletePost = deletePost
                          return(
                            <FiDelete className={classes.btn_delete} onClick={() => this.handleDeletePost(post.id)}/>
                          )
                        }}
                        </Mutation>
                        </b>)
                    }}
                    </Mutation>
                )
              }
              else{
                return(
                  <b className={classes.subtitle} onClick={() => this.handleUpdatePost(post.id, post.title, post.body)}><RiMagicLine/>{post.title}
                  <Mutation mutation={DELETE_POST_MUTATION}>
                  {deletePost=>{
                    this.deletePost = deletePost
                    return(
                      <FiDelete className={classes.btn_delete} onClick={() => this.handleDeletePost(post.id)}/>
                    )
                  }}
                  </Mutation>
                  </b>)
              }
                
            }
            return (
              <CardBody key={index}>
                {updatePost()}
                <br/>
                <p className={classes.subbody}>{post.body || <p style={{ opacity: 0.5 }}>No body for this post...</p>}</p>
                <Query query = {COMMENTLIST_QUERY} variables = {{query: query}}>
                  {({loading, error, data, subscribeToMore}) =>{
                    if (loading) return <p> loading....</p>
                    if (error){
                      console.log(error)
                      return <p>Error at query COMMENT :((( </p>
                    }
                    const comments = data.comments
                    // console.log(comments,"Post")
                    


                    if (!this.unsubscribe)
                      this.unsubscribe = subscribeToMore({
                        document: COMMENTS_SUBSCRIPTION,
                        variables: { postId: `${query}`},
                        updateQuery: (prev, { subscriptionData }) => {
                          if (!subscriptionData.data) return prev
                          console.log(subscriptionData.data.comment,'CommentSub')
                          console.log(prev,'CommentSub')
                          const comment = subscriptionData.data.comment.data.text
                          let deleteOrincrease = prev.comments.filter(e => {if(comment === e.text){return e}})

                          if (deleteOrincrease.length !==0){
                            console.log("Delete Comment")
                            return{
                              ...prev,
                              comments: prev.comments.filter(e => {if(comment !== e.text){return e}})
                            }
                          }
                          else{
                            console.log("increase Comment")
                            const newComment = subscriptionData.data.comment.data
                            return {
                              ...prev,
                              comments: [...prev.comments,newComment]
                            }
                          }
                        }
                      })
                    return (
                      <Comment comments = {comments} postid = {query}/>
                    )
                  }}

                </Query>
              </CardBody>
            )  
          })
      }
      else{
        return
      }
    }
    
  return(
          <Card style={{ margin: '30px auto', width: '600px'}} body outline color="danger">
            <CardHeader onClick = {this.handleclick}>{this.props.name} 
            <Mutation mutation={DELETE_USER_MUTATION}>
              {deleteUser => {
                this.deleteUser = deleteUser
                return (
                  <TiDeleteOutline className={classes.btn} onClick={this.handleDeleteAuthor}/>
                )
              }}
            </Mutation>
            </CardHeader>
            {postbody()}
            <CardFooter>{`Num of Posts: ${postnum}`}</CardFooter>
          </Card>

    )
}}

export default Post


