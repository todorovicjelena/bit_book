import React from 'react'
import { postservices } from '../../../services/PostService'


export class PostDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        this.getsingleUser()
    }
    getsingleUser() {
        const id = this.props.match.params.postId
        postservices.FetchSinglePosts(id)
            .then(post => {
                console.log(post);

            })


    }

    render() {
        return <p>this is postdetail page</p>

    }
}