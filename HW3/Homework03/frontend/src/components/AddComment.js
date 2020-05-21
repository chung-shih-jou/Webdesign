import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button
} from 'reactstrap';
import {
  CREATE_COMMENT_MUTATION
} from '../graphql'
import Select from './Select'

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      author: '',
      text: ''
    };
  }

  toggleDropDown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handelEnter = e => {
    e.preventDefault()

    const author = this.state.author
    console.log(author)
    this.createComment({
      variables: {
        text: this.state.text,
        author: author,
        post: this.props.postid
      }
    })

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <Mutation mutation={CREATE_COMMENT_MUTATION}>
        {createComment => {
          this.createComment = createComment

          return (
            <InputGroup size="sm">
              <InputGroupButtonDropdown addonType="append">
                <Input
                  size="sm"
                  name="user"
                  type="select"
                  value={this.state.author}
                  id="user"
                  defaultValue=""
                  onChange={e => {
                    this.setState({ author: e.target.value })
                  }}
                >
                  <option value="" selected disabled hidden>Choose...</option>
                  <Select />
                </Input>
              </InputGroupButtonDropdown>
              <Input
                name="body"
                value={this.state.text}
                id="body"
                placeholder="Say some comment..."
                onChange={e =>
                  this.setState({ text: e.target.value })
                }
              />
              <InputGroupAddon addonType="append">
                <Button color="secondary" onClick={this.handelEnter}>Enter!</Button>
              </InputGroupAddon>
            </InputGroup>
          )
        }}
      </Mutation>
    )
  }
}

export default AddComment
