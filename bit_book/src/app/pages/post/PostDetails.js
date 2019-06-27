import React from 'react'
import { postservices } from '../../../services/PostService'
import { commentservices } from '../../../services/ComentService'


export class PostDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: []
        }
    }
    componentDidMount() {
        this.getsingleUser()

    }
    getsingleUser() {
        const id = this.props.match.params.postId
        postservices.FetchSinglePosts(id)
            .then(post => {
                this.setState({ post })
                this.getComments(post.id)

            })
    }
    getComments(id) {
        console.log(id);

        commentservices.fetchService(id)


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
        const post = this.state.post
        if (!post) {

            return <p>loading page</p>
        }
        return (
            <>
                <div className="content">{this.renderSwitch(post)}</div>
            </>
        )

    }
}