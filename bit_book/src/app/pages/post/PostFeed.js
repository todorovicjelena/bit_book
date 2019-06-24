import React from 'react'
import { Link } from 'react-router-dom'


export class PostFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        getPosts()
    }
    getPosts() {

    }


    render() {
        return <p>feed page</p>
    }
}