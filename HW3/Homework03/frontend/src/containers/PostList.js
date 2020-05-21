import React, { Component } from 'react'
import { Query } from 'react-apollo'
import {
  POSTLIST_QUERY,
  POSTS_SUBSCRIPTION
} from '../graphql'
import OneUser from '../components/OneUser'

// let unsubscribe = null

class PostList extends Component {
  constructor(props) {
    super(props);
  }
  unsubscribe = null
  render() {
    const query = this.props.userid
    return (
      <Query query={POSTLIST_QUERY} variables={{ query }}>
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
              variables: { userId: `${query}` },
              updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev
                const newPost = subscriptionData.data.post.data
                return {
                  ...prev,
                  posts: [newPost, ...prev.posts]
                }
              }
            })
          
          return <OneUser name={this.props.username} posts={posts}/>
        }}
      </Query>
    )
  }
}

export default PostList
