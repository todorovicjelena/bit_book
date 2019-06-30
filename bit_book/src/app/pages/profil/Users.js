import React from 'react';
import './myprofile.css';
import { UserService } from '../../../services/UserService';
import { Link } from 'react-router-dom'


export class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            onChange: null

        }
    }


    componentDidMount() {
        this.getUser()
    }

    getUser() {
        UserService.fetchUsers()
            .then(user => {
                this.setState({
                    users: user,

                })
            })

    }

    onChange(event) {

        this.setState({
            name: event.target.value
        })
    }


    render() {

        const users = this.state.users
        //console.log(users)



        if (!users) {
            return <p>Loading page...</p>
        }

        return (
            <div className="peoplePage">

                <nav>
                    <div className="nav-wrapper">
                        <form>
                            <div className="input-field">
                                <input id="search" type="search" value="" />
                                <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                                <i className="material-icons">x</i>
                            </div>
                        </form>
                    </div>
                </nav>



                <div>
                    {users.map(user => (
                        <Link to={`/people/${user.id}`}>
                            <div className="col s12 m8 offset-m2 l6 offset-l3">
                                <div className="card-panel grey lighten-5 z-depth-1">
                                    <div className="row valign-wrapper">
                                        <div className="col s2">
                                            <img src={user.avatarUrl} alt="" class="circle responsive-img" />
                                        </div>
                                        <div className="col s10">
                                            <span className="black-text">
                                                {user.name()}
                                            </span>
                                            <div>
                                                <span>{user.about.bio}</span>
                                            </div>

                                            <div>
                                                <span className="lastpost">Last post at </span>
                                                <span>{user.getUserTime()}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    ))
                    }

                </div>
            </div>
        )

    }

}







