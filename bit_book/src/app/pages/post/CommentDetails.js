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
        .then(user =>{
            console.log(user);
            
            this.setState({user})
        })


    }
    componentDidMount() {
        this.getUserData()
    }
    render() {
       const {user} =(this.state);
       if(!user){
           return <p>people</p>
       }
        

        return(
      <>
            <img src = {user.avatarUrl}/>
           
            </>
            ) 
        }
    }