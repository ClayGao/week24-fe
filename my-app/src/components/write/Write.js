import React, {Component} from 'react';
import { getPosts, sendSinglePost } from '../../WebAPI'
import { DebounceInput } from 'react-debounce-input';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Write extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            author:'',
            body:''
        }
    }
 

    handlePostArticle = () => {
        const { history } = this.props
        const data = this.state 
        if (!data.title || !data.author || !data.body) {
            alert('Write Something :(') 
            return
        }
        sendSinglePost(data)
        this.setState({
            title:'',
            author:'',
            body:''
        })
        history.push('/list')
        getPosts()
    }
    

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render(){
        const {title, author, body} = this.state
        const {history} = this.props
        return (
            <div  className="board">
                <div className="page-title">
                    Write Something :D
                </div>
                <form className="write-article">
                    Title: <DebounceInput 
                            element="input" 
                            name="title"
                            debounceTimeout={1000} 
                            onChange={this.handleInput} 
                            placeholder="Enter your title..." 
                            type="text" 
                            className="write-article-title" 
                            value={title} />
                    Your name: <DebounceInput 
                                name="author"
                                element="input" 
                                debounceTimeout={1000} 
                                onChange={this.handleInput} 
                                placeholder="Enter your name..." 
                                type="text" 
                                className="write-article-editor" 
                                value={author} />
                    Content:　<DebounceInput 
                                name="body"
                                element="textarea" 
                                debounceTimeout={800} 
                                onChange={this.handleInput} 
                                placeholder="Enter something..." 
                                className="write-article-text" 
                                value={body} />
                    <input className="write-article-button" type="button" onClick={this.handlePostArticle} value="Send" />
                </form>
            </div>
        )
    }
}

export default Write