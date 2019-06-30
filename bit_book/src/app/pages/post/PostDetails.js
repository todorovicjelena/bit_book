import React from 'react'
import { postservices } from '../../../services/PostService'
import { commentservices } from '../../../services/ComentService'
import { UserService } from '../../../services/UserService'
import { UserDetails } from '../profil/UserDetails';
import { CommentDetails } from './CommentDetails';


export class PostDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: [],
            comment: [],
            userlistId: []
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
       // console.log(id);

        commentservices.fetchService(id)
            .then(comment => {
                this.setState({
                    comment
                })


            })
    }
    getUserOfComment() {
        const list = this.state.userlistId.length
        const listId = this.state.userlistId
        if (list) {
            listId.map(id => {

                commentservices.fetchUserOfComment(id)

            })
        }
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
        const { post, comment } = this.state
        console.log(comment);


        if (!post && !comment) {

            return <p>loading page</p>
        }
        return (
            <>
                <div className="content">{this.renderSwitch(post)}</div>
                <div>
                    {
                        comment.map(com => (
                            <div>
                                <CommentDetails id={com.userId} />
                                <p>{com.body} </p>
                            </div>
                        ))

                    }
                </div>
            </>
        )

    }
}