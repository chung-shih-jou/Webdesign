const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users
    }

    return db.users.filter(user => {
      return user.name.toLowerCase().includes(args.query.toLowerCase())
    })
  },
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts
    }

    return db.posts.filter(post => {
      return args.query === post.author
    })
  
  },
  comments(parent, args, { db }, info) {
    if (!args.query) {
      return db.comments
    }

    return db.comments.filter(com => {
      return args.query === com.post
    })
  },
  me() {
    return {
      id: '123098',
      name: 'Mike',
      email: 'mike@example.com'
    }
  },
  post() {
    return {
      id: '092',
      title: 'GraphQL 101',
      body: '',
      published: false
    }
  }
}

export { Query as default }
