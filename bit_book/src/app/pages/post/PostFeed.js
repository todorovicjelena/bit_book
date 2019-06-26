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

    getToken() {

        const registerToken = localStorage.getItem('postToken')

        this.setState({
            haveToken: registerToken
        })
    }

    componentDidMount() {
        localStorage.removeItem('postToken')

        this.getPosts()
        this.getToken()
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
                return <iframe src={post.videoUrl}> </iframe>
            case 'image':
                return <img src={post.url} />
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
                <div id={post.id}>

                    <Link to={`/post/${post.id}`}>
                        <div class="row">
                            <div class="col s12">
                                <div class="card">

                                    <div className='card-content'>
                                        {this.renderSwitch(post)}
                                    </div>

                                </div>
                            </div>
                        </div>




                    </Link>
                </div>

            )
        )
    }
}

