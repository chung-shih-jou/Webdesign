import { gql } from 'apollo-boost'

export const POSTS_SUBSCRIPTION = gql`
  subscription post($authorId: ID!){
    post(authorId: $authorId) {
      mutation
      data {
        id
        title
        body
        author {
          name
        }
        published
      }
    }
  }
`
export const USERS_SUBSCRIPTION = gql`
  subscription user{
    user {
      mutation
      data {
        id
        name
        email
      }
    }
  }
`

export const USERLIST_SUBSCRIPTION = gql`
  subscription user{
    user {
      mutation
      data {
        id
        name
        email
      }
    }
  }
`

export const COMMENTS_SUBSCRIPTION = gql`
  subscription comment($postId: ID!){
    comment (postId: $postId){
      mutation
      data {
        id
        text
        author{
          name
        }
        post{
          id
        }
      }
    }
  }
`

