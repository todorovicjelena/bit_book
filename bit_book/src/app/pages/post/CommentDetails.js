import React from 'react'
import { commentservices } from '../../../services/ComentService'
import { UserService } from '../../../services/UserService'

export class CommentDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }
    getUserData() {
        const id = this.props.id
        console.log(id);

        commentservices.fetchUserOfComment(id)


    }
    componentDidMount() {
        this.getUserData()
    }
    render() {

        return <p>detalji</p>
    }
}