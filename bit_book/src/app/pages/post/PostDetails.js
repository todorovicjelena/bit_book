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
                return <div className="postViewComments">
                    <iframe className="framePost" src={post.videoUrl}></iframe>
                </div>
            case 'image':
                return <div className="postViewCommentsImg">
                    <img className="imgPost" src={post.url} />
                </div>
            default:
                return <div className="postViewComments">
                    <p className="pPost">{post.text}</p>
                </div>
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
                            <div className="postComments">

                                




                                < div className="col s12 m8 offset-m2 l6 offset-l3">
                                    <div className="card-panel grey lighten-5 z-depth-1">
                                        <div className="row valign-wrapper">
                                            <div className="col s2">
                                                <img src="" alt="" className="circle responsive-img" />
                                            </div>
                                            <div className="col s10">
                                                <span className="black-text">
                                                    
                                                </span>
                                                <div>
                                                <CommentDetails id={com.userId} />
                                                    <span>{com.body}</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                          </div>
                           
                        ))

                    }
                </div>
            </>
        )

    }
}