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
    }
  }
`
export const USERS_QUERY = gql`
    query {
      users {
        id
        name
      }
    }
`

export const COMMENTLIST_QUERY = gql`
    query comments($query: ID){
      comments(query: $query){
        text
        author{
          name
        }
        post{
          id
        }
        id
      }
    }
`
