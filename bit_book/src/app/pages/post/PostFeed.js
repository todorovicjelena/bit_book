import React from 'react'
import { Link } from 'react-router-dom'
import { postservices } from '../../../services/PostService';



export class PostFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.getPosts()
    }
    getPosts() {
        postservices.FetchPosts()

    }


    render() {
        return <p>feed page</p>
    }
}

