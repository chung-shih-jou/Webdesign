import { gql } from 'apollo-boost'

export const POSTS_SUBSCRIPTION = gql`
  subscription post($userId: ID!) {
    post(userId: $userId) {
      mutation
      data {
        id
        title
        body
        author {
          name
        }
        like
        published
      }
    }
  }
`

export const COMMENTS_SUBSCRIPTION = gql`
  subscription comment($postId: ID!) {
    comment(postId: $postId) {
      mutation
      data {
        text
        author {
          name
        }
      }
    }
  }
`