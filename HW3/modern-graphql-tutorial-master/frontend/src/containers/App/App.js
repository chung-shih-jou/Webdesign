import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'

import {
  CREATE_POST_MUTATION,
  CREATE_USER_MUTATION
} from '../../graphql'
import UserList from '../UserList'
import Select from '../../components/Select'
import classes from './App.module.css'


class App extends Component {
  state = {
    formTitle: '',
    formBody: '',
    formAuthor: '',
    formName: '',
    formEmail: '',
    clickCreateAuthor: false
  }

  handleFormPost = e => {
    e.preventDefault()
    console.log(typeof(this.state.formTitle), typeof(this.state.formBody),typeof(this.state.formAuthor))
    const { formTitle, formBody, formAuthor } = this.state
    if (!formTitle || !formBody ) return

    this.createPost({
      variables: {
        title: formTitle,
        body: formBody,
        author: formAuthor,
        published: true
      }
    })

    this.setState({
      formTitle: '',
      formBody: '',
      formAuthor: ''
    })
  }

  handleFormUser = e => {
    e.preventDefault()
    console.log('ID:'+this.state.ID+',creatUser:'+ this.state.formName + ',email:'+this.state.formEmail, 'here')
    console.log(typeof(this.state.ID), typeof(this.state.formName),typeof(this.state.formEmail))
    const { formName, formEmail} = this.state
    if (!formName || !formEmail ) return 
    
    this.createUser({
      variables: {
        name: formName,
        email: formEmail
      }
    })

    this.setState({
      formName: '',
      formEmail: ''
    })
  }


  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className={classes.title}>Modern GraphQL Tutorial</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="6" className={classes.form}>
            <Mutation mutation={CREATE_USER_MUTATION}>
              {createUser => {
                this.createUser = createUser
                  return(
                    <Form onSubmit={this.handleFormUser}>
                    <p className={classes.p}>Create User </p>
                      <FormGroup row>
                        <Label for="name" sm={2} className={classes.small_title}>
                          Name
                        </Label>
                        <Col sm={10}>
                          <Input
                            name="name"
                            value={this.state.formName}
                            id="name"
                            placeholder="name..."
                            onChange={e =>
                              this.setState({ formName: e.target.value })
                            }/>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="email" sm={2} className={classes.small_title}>
                          Email
                        </Label>
                        <Col sm={10}>
                          <Input
                            name="email"
                            value={this.state.formEmail}
                            id="email"
                            placeholder="email..."
                            onChange={e =>
                              this.setState({ formEmail: e.target.value })
                            }/>
                        </Col>
                      </FormGroup>
                      <Button type="submit" color="danger">
                          Create Author
                      </Button>
                    </Form>)}}
            </Mutation>
            <Mutation mutation={CREATE_POST_MUTATION}>
              {createPost => {
                this.createPost = createPost
                return (
                  <Form onSubmit={this.handleFormPost}>
                  <br/>
                  <p className={classes.p}>Post </p>
                    <FormGroup row>
                      <Label for="authors" sm={2} className={classes.small_title}>
                        Authors
                      </Label>
                      <Col sm={10}>
                        <Input
                          name="authors"
                          type ="select"
                          value={this.state.formAuthor}
                          id="author"
                          onChange={e =>this.setState({ formAuthor: e.target.value })
                          }>
                          <option value="" disabled hidden>Choose user...</option>
                          <Select/>
                        </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="title" sm={2} className={classes.small_title}>
                        Title
                      </Label>
                      <Col sm={10}>
                        <Input
                          name="title"
                          value={this.state.formTitle}
                          id="title"
                          placeholder="Post title..."
                          onChange={e =>
                            this.setState({ formTitle: e.target.value })
                          }/>
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for="body" className={classes.small_title}>Body</Label>
                      <Input
                        type="textarea"
                        name="body"
                        value={this.state.formBody}
                        id="body"
                        placeholder="Post body..."
                        onChange={e =>
                          this.setState({ formBody: e.target.value })
                        }
                      />
                    </FormGroup>
                    <Button type="submit" color="danger">
                      Post!
                    </Button>
                  </Form>
                )
              }}
            </Mutation>
          </Col>
          <Col xs="6">
            <UserList/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
