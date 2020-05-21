import React, { Component } from 'react'
import { Query } from 'react-apollo'
import {
  POSTLIST_QUERY,
  POSTS_SUBSCRIPTION
} from '../graphql'
import Post from '../components/Post/Post'

class PostList extends Component {
  constructor(props) {
    super(props);
  }
  unsubscribe = null
  render() {
    const query = this.props.userid
    // console.log(query)
    return (
      <Query query={POSTLIST_QUERY} variables={{query}}>
        {({ loading, error, data, subscribeToMore }) => {
          if (loading) return <p>Loading...</p>
          if (error) {
            console.log(error)
            return <p>Error at query POSTLIST:(((</p>
          }
          const posts = data.posts
          if (!this.unsubscribe)
            this.unsubscribe = subscribeToMore({
              document: POSTS_SUBSCRIPTION,
              variables: { authorId: `${query}`},
              updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev
                  console.log(subscriptionData.data.post,'CommentSub')
                  console.log(prev,'CommentSub')
                  const post = subscriptionData.data.post.data.title
                  let deleteOrincrease = prev.posts.filter(e => {if(post === e.title){return e}})

                if (deleteOrincrease.length !== 0){
                  console.log("Delete Post")
                  return{
                    ...prev,
                    posts: prev.posts.filter(e => {if(post !== e.title){return e}})
                  
                  }
                }
                else{
                  const newPost = subscriptionData.data.post.data
                  return {
                    ...prev,
                    posts: [...prev.posts, newPost]
                  }
                }
              }
            })
            // console.log(posts,query,'postlist unsubscibe')
          
          return <Post name={this.props.username} posts={posts} userid={this.props.userid}/>
        }}
      </Query>
    )
  }
}

export default PostList
