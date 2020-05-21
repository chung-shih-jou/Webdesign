import React, { Component } from 'react'
import { Query } from 'react-apollo'

import {
  USERS_QUERY
} from '../graphql'
import PostList from './PostList';

class UserList extends Component {
  
  render() {
    return (
      <Query query={USERS_QUERY}>
        {({ loading, error, data, subscribeToMore }) => {
          if (loading) return <p>Loading...</p>
          if (error) {
            console.log(error)
            return <p>Error at query USERLIST :(((</p>
          }
            const users = data.users.map((user, index) => {
              const query = user.id
              return (
                <PostList key={index} userid={query} username={user.name}/>
            )})
          
          
          return <div>{users}</div>
        }}
      </Query>
    )
  }
}

export default UserList
