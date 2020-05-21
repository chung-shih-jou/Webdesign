const Subscription = {
  comment: {
    subscribe(parent, { postId }, { db, pubsub }, info) {
      const post = db.posts.find(post => post.id === postId && post.published)

      console.log(post, postId)
      if (!post) {
        throw new Error('Post not found')
      }
      return pubsub.asyncIterator(`comment ${postId}`)
    }
  },
  user:{
    subscribe(parent, args, { pubsub }, info) {
      console.log("sub")
      return pubsub.asyncIterator(`user`)
    }
  },
  post: {
    subscribe(parent, {authorId}, { db,pubsub }, info) {
      const author = db.users.find(user => user.id === authorId)
      // console.log(author,'post')

      if (!author) {
        throw new Error('Author not found. if you created or delete Author, you can ignore it.')
      }

      return pubsub.asyncIterator(`post ${authorId}`)
    }
  }
}

export { Subscription as default }
