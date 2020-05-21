import { gql } from 'apollo-boost'

export const POSTS_QUERY = gql`
  query {
    posts {
      title
      body
      author {
        name
      }
      published
      like
    }
  }
`

export const USERS_QUERY = gql`
  query {
    users {
      name
    }
  }
`

export const USERLIST_QUERY = gql`
  query {
    users {
      id
      name
    }
  }
`

export const POSTLIST_QUERY = gql`
  query posts($query: ID){
    posts(query: $query) {
      id
      title
      body
      author {
        name
      }
      published
      like
    }
  }
`

export const COMMENTLIST_QUERY = gql`
  query comments($query: ID){
    comments(query: $query) {
      text
      author {
        name
      }
    }
  }
`
