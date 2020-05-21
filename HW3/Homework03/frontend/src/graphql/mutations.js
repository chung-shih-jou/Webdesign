import { gql } from 'apollo-boost'

export const CREATE_POST_MUTATION = gql`
  mutation createPost(
    $title: String!
    $body: String!
    $published: Boolean!
    $author: String!
    $like: ID!
  ) {
    createPost(
      data: {
        title: $title
        body: $body
        published: $published
        author: $author
        like: $like
      }
    ) {
      title
      body
      author {
        name
      }
      like
      published
    }
  }
`

export const UPDATE_POST_MUTATION = gql`
  mutation updatePost(
    $id: ID!
    $like: ID!
  ) {
    updatePost(
      id: $id
      data: {
        like: $like
      }
    ) {
      title
      body
      author {
        name
      }
      like
      published
    }
  }
`
export const CREATE_COMMENT_MUTATION = gql`
  mutation createComment(
    $text: String!
    $author: String!
    $post: ID!
  ) {
    createComment(
      data: {
      text: $text
      author: $author
      post: $post
    }) {
      text
      author {
        name
      }
    }
  }
`

