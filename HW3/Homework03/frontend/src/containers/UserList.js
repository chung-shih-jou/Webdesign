import React, { Component } from 'react'
import { Query } from 'react-apollo'

import {
  USERLIST_QUERY
} from '../graphql'
import Post from '../components/Post/Post'
import PostList from './PostList';

let unsubscribe = null

class UserList extends Component {
  state = {
    users: []
  }

  render() {
    return (
      <Query query={USERLIST_QUERY}>
        {({ loading, error, data, subscribeToMore }) => {
          if (loading) return <p>Loading...</p>
          if (error) {
            console.log(error)
            return <p>Error at query USERLIST :(((</p>
          }

          const users = data.users.map((user, index) => {
            const query = user.id
            return (
              <PostList userid={query} username={user.name}/>
          )})
          return <div>{users}</div>
        }}
      </Query>
    )
  }
}

export default UserList
