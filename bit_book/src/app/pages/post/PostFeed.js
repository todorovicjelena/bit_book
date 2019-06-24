import React from 'react'
import { Link } from 'react-router-dom'
import { postservices } from '../../../services/PostService';
import './postfeed.css'



export class PostFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        this.getPosts()
    }
    getPosts() {
        postservices.FetchPosts()
            .then(posts => {
                this.setState({
                    posts
                })

            })

    }
    renderSwitch(param) {
        switch (param.type) {
            case 'video':
                return <iframe src={param.videoUrl}></iframe>;
            case 'image':
                return <img src={param.url} />;
            default:
                return <p>{param.text}</p>
        }

    }


    render() {
        const posts = this.state.posts
        console.log(posts);



        if (!posts)

            return <p>Nothing in feed..</p>


        return (
            posts.map(post =>
                <div className='post'>
                    {this.renderSwitch(post)}
                </div>

            )
        )
    }
}

