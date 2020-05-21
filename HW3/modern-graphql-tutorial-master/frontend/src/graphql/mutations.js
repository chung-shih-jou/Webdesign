import { gql } from 'apollo-boost'

export const CREATE_POST_MUTATION = gql`
  mutation createPost(
    $title: String!
    $body: String!
    $author: String!
    $published: Boolean!
  ) {
    createPost(
      data: {
        title: $title
        body: $body
        author: $author
        published: $published
      }
    ) {
      title
      body
      author {
        name
      }
      published
    }
  }
`
export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $name: String!
    $email: String!
  ) {
    createUser(
      data: {
        name: $name
        email: $email
      }
    ) {
        name
        email
    }
  }
`
export const CREATE_COMMENT_MUTATION = gql`
  mutation createComment(
    $author: String!
    $text: String!
    $post: ID!
  ) {
    createComment(
      data: {
        author: $author
        text: $text
        post: $post
      }
    ) {
      author{
        name
      }
      text
      post{
        id
      }
    }
  }
`
export const DELETE_USER_MUTATION = gql`
  mutation deleteUser($id:ID!) {
    deleteUser(id:$id) {
      id
      name
      email
    }
  }
`

export const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($id:ID!) {
    deleteComment(id:$id) {
      id
      author{
        name
      }
      text
      post{
        id
      }
    }
  }
`

export const DELETE_POST_MUTATION = gql`
  mutation deletePost($id:ID!) {
    deletePost(id:$id) {
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

export const UPDATE_POST_MUTATION = gql`
  mutation updatePost(
    $id:ID!
    $title: String!
    $body: String!
    $published: Boolean!
    $authorId: ID!
    ) {
        updatePost(
          id:$id
          data:{
            title: $title
            body: $body
            published: $published
            authorId: $authorId
          }) {
          id
          title
          body
          author {
            id
            name
          }
          published
        }
      }
`

