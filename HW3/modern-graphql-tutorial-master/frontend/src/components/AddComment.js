import React, {Component} from 'react'
import {Input, Button} from 'reactstrap'
import Select from './Select'
import './comment.css'
import { Mutation } from 'react-apollo'
import{ CREATE_COMMENT_MUTATION } from '../graphql'
class AddComment extends Component{
    state={formComment:'', formAuthor: ''}
    handlecomment =(e) =>{
        e.preventDefault()
        const {formComment, formAuthor }= this.state
        if (!formComment || !formAuthor) return
        console.log(formAuthor, formComment, this.props.postid)
        console.log(typeof(formAuthor), typeof(formComment), typeof(this.props.postid))
        this.createComment({
            variables: {
                text: formComment,
                author: formAuthor,
                post: this.props.postid
            }
          })
        this.setState({formComment: '', formAuthor: ''})

    }
    render(){
        
        return(
            <Mutation mutation={CREATE_COMMENT_MUTATION}>{
                createComment  =>{
                    this.createComment = createComment
                    return (
                        <>
                        <Input
                            name="authors"
                            type ="select"
                            value={this.state.formAuthor}
                            id="author"
                            onChange={e =>this.setState({ formAuthor: e.target.value })
                            } className ="addcommnet">
                            <option value="" disabled hidden>Choose user...</option>
                            <Select/>
                        </Input>
                        <Input 
                            type="textarea" 
                            className ="body" 
                            name='comment' 
                            value = {this.state.formComment}
                            placehold='Add some comments' 
                            id='comment' 
                            onChange={e =>this.setState({ formComment: e.target.value })}>
                        </Input>
                        <Button className ="enter" type="submit" outline color="secondary" size="sm" onClick={this.handlecomment}>Enter!</Button>
                        </>
                    )
                }
            }
            </Mutation>
        )
    }
}
export default AddComment