import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props)
    }
 
    componentDidMount() {
        this.props.getPostList()
    }
    
    render(){
        const {history, postListData, weatherData} = this.props
        return (
            <div>
                <div  className="board">
                    <div className="page-title">
                        Weather
                    </div>
                    <div className="single-post" > 
                        <div className="single-post-text">
                            
                            {weatherData.map(data => (
                                <ul> 
                                    <li>Weather: {data.Wx}</li>
                                    <li>Feel like: {data.CI}</li>
                                    <li>Temp: {(Number(data.MinT)+Number(data.MaxT))/2}</li>
                                    <li>Rainy: {data.PoP}</li>
                                </ul>
                            ))}
                        </div>
                    </div>
                    <div className="page-title">
                        About me
                    </div>
                    <div className="single-post" >        
                        <div className="single-post-text">
                            Hi, I am Clay 
                            <br />
                            I am Learing Web Frontend Develope and try to bulid my Blog with React and React-router
                            <br />
                            Maybe it looks ugly Orz.... but everything will be alright, doesn't it ?
                            <br />
                            By the way, the blog now you see won't be the latest version 
                            <br />
                            I will update week by week
                            <br />
                            So, give me some time
                            <br />
                            See you :D
                            <br />
                            Xin Yi Liu go to eat the SHIT :D
                        </div>
                        <div className="single-post-editor">
                            Author: ClayGao
                        </div>
                    </div>
                    <div className="page-title">
                        The Latest Articles
                    </div>
                    {postListData.map(card => (
                        <div key={card.id} 
                            className="post" 
                            onClick={() => { 
                                history.push('/list/id=' + card.id)
                            }}>
                            <div className="post-title">
                                {card.title}
                            </div>
                            <div className="post-text" >
                            {card.body}
                            </div>
                            <div className="post-editor">
                                Author: {card.author ? card.author : "Noname"}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
 }


export default Home 