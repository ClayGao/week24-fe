import React, {Component} from 'react';
import { sendSinglePost } from '../../WebAPI'

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
        const data = this.state 
        if (!data.title || !data.author || !data.body) {
            alert('Write Something :D') 
            return
        }
        sendSinglePost(data)
        .then(
            this.setState({
                title:'',
                author:'',
                body:''
            })
        ).catch(error =>{
            alert('Failed to post, connect admin please :)')
        })
    }
    
    
    handleInput = (e) => {
        const inputType = e.target.className
            if(inputType === "write-article-title") {
                this.setState({title: e.target.value,})
            } else if (inputType === "write-article-editor") {
                this.setState({author: e.target.value})
            } else {
                this.setState({body: e.target.value})
            }
    }
    
    render(){
        const {title, author, body} = this.state
        return (
            <div  className="board">
                <div className="page-title">
                    Write Something :D
                </div>
                <form className="write-article"  onChange={this.handleInput} >
                    Title: <input type="text" className="write-article-title" value={title} />
                    Your name: <input type="text" className="write-article-editor" value={author} />
                    Content:　<textarea className="write-article-text" value={body}></textarea>
                    <input className="write-article-button" type="button" onClick={this.handlePostArticle} value="Send" />
                </form>
            </div>
        )
    }
 }


export default Write