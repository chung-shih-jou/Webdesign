import React, { Component } from 'react'
import { Query } from 'react-apollo'

import {
  USERS_QUERY
} from '../graphql'

class Select extends Component {
  render() {
    return (
      <Query query={USERS_QUERY}>
        {({ loading, error, data, subscribeToMore }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error :(((</p>

          const users = data.users.map((user, index) => (
            <option key={index}>{user.name}</option>
          ))

          return users;
        }}
      </Query>
    )
  }
}

export default Select