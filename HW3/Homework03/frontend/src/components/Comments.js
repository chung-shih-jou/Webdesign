import React, { Component } from 'react'
import { Button } from 'reactstrap'
import AddComment from './AddComment'


class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
  }
  handelclick = () => {
    let setbool = this.state.open
    if(setbool)
      setbool = false
    else
      setbool = true
    this.setState({open: setbool})
  }
  render() {
    const comments = this.props.comments
    const commentbody = () => {
      if(this.state.open){
        const show = comments.map((com, index) => (
          <div>
            <p>{com.author.name}: {com.text}</p>
          </div>
        ))
        return (
          <div>
            {show}
            <AddComment postid={this.props.postid}/>
            <br />
            <Button outline color="secondary" size="sm" onClick={this.handelclick}>Don't show anymore...</Button>
          </div>
        )
      }
      else return (
        <div>
          <Button outline color="secondary" size="sm" onClick={this.handelclick}>Show comments...</Button>
        </div>
      )
    }
    return (
      <div>
        {commentbody()}
      </div>
    )
  }
}

export default Comments
