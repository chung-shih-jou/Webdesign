import React, { Component } from 'react'
import { Card, CardHeader, CardFooter, CardBody } from 'reactstrap'
import { FaRegThumbsUp } from '../../node_modules/react-icons/fa'
import { Query, Mutation } from 'react-apollo'
import {
  COMMENTLIST_QUERY,
  UPDATE_POST_MUTATION,
  COMMENTS_SUBSCRIPTION
} from '../graphql'
import Comments from './Comments'


class OneUser extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
  }
  
  handelclick = () => {
    let setbool = this.state.open
    if (setbool)
      setbool = false
    else
      setbool = true
    this.setState({ open: setbool })
  }

  render() {
    const posts = this.props.posts
    const postnum = '' + posts.length
    const postbody = () => {
      if (this.state.open) {
        return posts.map((post, index) => {
          const query = post.id
          let unsubscribe = null
          return (
            <CardBody >
              <b>{post.title}</b>
              <br />
              {post.body || <p style={{ opacity: 0.5 }}>No body for this post...</p>}
              <Query query={COMMENTLIST_QUERY} variables={{ query }}>
                {({ loading, error, data, subscribeToMore }) => {
                  if (loading) return <p>Loading...</p>
                  if (error) {
                    console.log(error)
                    return <p>Error at query COMMENT:(((</p>
                  }
                  const comments = data.comments
                  const likenum = parseInt(post.like)
                  if (!unsubscribe)
                    unsubscribe = subscribeToMore({
                      document: COMMENTS_SUBSCRIPTION,
                      variables: { postId: `${query}` },
                      updateQuery: (prev, { subscriptionData }) => {
                        if (!subscriptionData.data) return prev
                        const newComment = subscriptionData.data.comment.data
                        return {
                          ...prev,
                          comments: [...prev.comments, newComment]
                        }
                      }
                    })

                  return (<>
                    <hr style={{ borderColor: 'rgb(165, 234, 247)'}}/>
                    <Like postid={query} like={likenum} com={comments.length} />
                    <Comments comments={comments} postid={query} />
                  </>
                  )
                }}
              </Query>
            </CardBody>)
        })
      }
      else return
    }

    return (
      <Card style={{ margin: '20px auto', width: '540px', borderColor: 'rgb(165, 234, 247)' }}>
        <CardHeader onClick={this.handelclick} style={{ backgroundColor: 'rgb(165, 234, 247)' }}>{this.props.name}</CardHeader>
        {postbody()}
        <CardFooter style={{ borderColor: 'rgb(165, 234, 247)'}}>{`Num of Posts: ${postnum}`}</CardFooter>
      </Card>
    )
  }
}


export default OneUser


class Like extends Component {
  constructor(props) {
    super(props);
    this.state = { like: '' + this.props.like, com: '' + this.props.com }
  }

  handleLike = () => {
    console.log(this.props.postid)
    const nownum = parseInt(this.state.like)
    this.setState({ like: '' + (nownum + 1) })
    this.updatePost({
      variables: {
        id: this.props.postid,
        like: 1
      }
    })
  }

  render() {
    return (
      <Mutation mutation={UPDATE_POST_MUTATION}>
        {updatePost => {
          this.updatePost = updatePost

          return (
            <p><span><FaRegThumbsUp onClick={this.handleLike} /></span> {this.state.like} Likes and {this.props.com} comments!</p>
          )
        }}
      </Mutation>
    )
  }
}