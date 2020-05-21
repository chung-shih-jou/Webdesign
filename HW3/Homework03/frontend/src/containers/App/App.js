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
  CREATE_POST_MUTATION
} from '../../graphql'
import Select from '../../components/Select'
import classes from './App.module.css'
import UserList from '../UserList';

let unsubscribe = null

class App extends Component {
  state = {
    formTitle: '',
    formAuthor: '',
    formBody: ''
  }

  handleFormSubmit = e => {
    e.preventDefault()

    const { formTitle, formBody, formAuthor } = this.state

    if (!formTitle || !formBody) return

    this.createPost({
      variables: {
        title: formTitle,
        body: formBody,
        published: true,
        author: formAuthor,
        like: 0
      }
    })

    this.setState({
      formTitle: '',
      formBody: ''
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className={classes.title}>Lite Social Media Using GraphQL</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="6" className={classes.form}>
            <Mutation mutation={CREATE_POST_MUTATION}>
              {createPost => {
                this.createPost = createPost
                return (
                  <Form onSubmit={this.handleFormSubmit}>
                    <FormGroup row>
                      <Label for="author" sm={2}>
                        Author
                      </Label>
                      <Col sm={10}>
                        <Input
                          name="author"
                          type="select"
                          value={this.state.formAuthor}
                          id="author"
                          defaultValue=""
                          onChange={e => {
                            this.setState({ formAuthor: e.target.value })}
                          }
                          style={{ borderColor: 'rgb(6, 155, 185)'}}>
                          <option value="" selected disabled hidden>Choose user...</option>
                          <Select />
                        </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="title" sm={2}>
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
                          }
                          style={{ borderColor: 'rgb(6, 155, 185)'}}
                        />
                      </Col>
                    </FormGroup>
                    
                    <FormGroup>
                      <Label for="body">Body</Label>
                      <Input
                        type="textarea"
                        name="body"
                        value={this.state.formBody}
                        id="body"
                        placeholder="Post body..."
                        onChange={e =>
                          this.setState({ formBody: e.target.value })
                        }
                        style={{ borderColor: 'rgb(6, 155, 185)'}}
                      />
                    </FormGroup>
                    <Button type="submit" style={{ backgroundColor: 'rgb(6, 155, 185)', borderColor: 'rgb(6, 155, 185)' }} >
                      Post!
                    </Button>
                  </Form>
                )
              }}
            </Mutation>
          </Col>
          <Col xs="6">
            <UserList />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
