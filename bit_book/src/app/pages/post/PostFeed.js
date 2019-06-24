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
    renderSwitch(post) {
        switch (post.type) {
            case 'video':
                return <iframe src={post.videoUrl}></iframe>;
            case 'image':
                return <img src={post.url} />;
            default:
                return <p>{post.text}</p>
        }

    }


    render() {
        const posts = this.state.posts;

        if (!posts) {
            return <p>Nothing in feed..</p>
        }

        return (
            posts.map(post =>
                <div className='post' id={post.id}>
                    {this.renderSwitch(post)}
                </div>

            )
        )
    }
}

