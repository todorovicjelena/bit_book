import React from 'react';
import './myprofile.css';
import { UserService } from '../../../services/UserService'


export class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []

        }
    }


    componentDidMount() {
        this.getUser()
    }

    getUser() {
        UserService.fetchUsers()
            .then(user => {
                this.setState({
                    users: user
                })
            })

    }

    render() {

        const users = this.state.users
        console.log(users)

        return (

            <div>
                <div className="profile-page">
                    <img className="responsive-img" src="https://www.clarifybd.com/wp-content/uploads/2016/03/client-icon-blue.png" width="300x" height="300px" />
                    <h4>Name Surname</h4>
                    <div className="textProfile">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <input type="button" value="Comments"></input>
                    <input type="button" value="Comments"></input>
                </div >

            </div>

        )

    }

}






