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
                return <div className="videoFeed">
                    <iframe className="videoFrame" src={post.videoUrl}></iframe>
                </div>
            case 'image':
                return <div className="imgFeed">
                    <img className="imgInFeed" src={post.url} />
                </div>
            default:
                return <div className="pFeed">
                    <p className="paragrafFeed">{post.text}</p>
                </div>
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

