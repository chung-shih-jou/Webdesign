const users = [
  {
    id: '1',
    name: 'Andrew',
    email: 'andrew@example.com',
    age: 27
  },
  {
    id: '2',
    name: 'Isabel',
    email: 'isabel@example.com'
  },
  {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com'
  },
  {
    id: '4',
    name: 'Rebecca',
    email: 'rebecca@example.com'
  },
  {
    id: '5',
    name: 'Sarah',
    email: 'sarah@example.com'
  }
]

const posts = [
  {
    id: '10',
    title: 'GraphQL 101',
    body: 'This is how to use GraphQL...',
    published: true,
    author: '1',
    like: '13'
  },
  {
    id: '11',
    title: 'GraphQL 201',
    body: 'This is an advanced GraphQL post...',
    published: false,
    author: '1',
    like: '25'
  },
  {
    id: '12',
    title: 'Programming Music',
    body: '',
    published: true,
    author: '5',
    like: '40'
  },
  {
    id: '13',
    title: 'I Love Web!!!!',
    body: 'I love web programming!!!',
    published: true,
    author: '2',
    like: '111'
  },
  {
    id: '14',
    title: 'FINAL HELL',
    body: 'Please kill me...',
    published: true,
    author: '3',
    like: '99'
  }
]

const comments = [
  {
    id: '102',
    text: 'This worked well for me. Thanks!',
    author: '3',
    post: '10'
  },
  {
    id: '103',
    text: 'Glad you enjoyed it.',
    author: '1',
    post: '10'
  },
  {
    id: '104',
    text: 'This did no work.',
    author: '2',
    post: '11'
  },
  {
    id: '105',
    text: 'Nevermind. I got it to work.',
    author: '1',
    post: '12'
  },
  {
    id: '106',
    text: 'DON\'T DO THAT!',
    author: '4',
    post: '14'
  },
  {
    id: '107',
    text: 'HAHA',
    author: '2',
    post: '10'
  }
]

const db = {
  users,
  posts,
  comments
}

export { db as default }
