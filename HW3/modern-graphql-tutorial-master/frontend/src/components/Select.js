import React, { Component } from 'react'
import { Query } from 'react-apollo'

import {
  USERS_QUERY,
  USERS_SUBSCRIPTION
} from '../graphql'

class Select extends Component {
  
  render() {
    return (
      <Query query={USERS_QUERY}>
        {({ loading, error, data, subscribeToMore }) => {
          if (loading) return <p>Loading...</p>
          if (error) return  <p>Error :(((</p>
          const users = data.users.map((user, index) => (
            <option key={index}>{user.name}</option>
          ))
          if (!this.unsubscribe)
            this.unsubscribe = subscribeToMore({
              document: USERS_SUBSCRIPTION,
              updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev
                const name = subscriptionData.data.user.data.name
                let deleteOrincrase = prev.users.filter(e => {if (name ===e.name){return e}})
                
                if (deleteOrincrase.length !== 0){
                  console.log("Delete User")
                  return {
                    ...prev,
                    users: prev.users.filter(e => {if (name !==e.name){return e}})
                  }
                }
                else{
                  console.log("increase User")
                  const newUser = subscriptionData.data.user.data 
                
                  return {
                    ...prev,
                    users: [...prev.users,newUser]
                  }
                }
                
              }
            })
          return users;
        }}
      </Query>
    )
  }
}

export default Select