import React from 'react';
import { UserService } from '../../../services/UserService';


export class UserDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: []


        }

    }

    componentDidMount() {
        this.getProfileId()
    }


    getProfileId() {
        const id = this.props.match.params.peopleId

        UserService.fetchProfilePic(id)

            .then(user => {
                this.setState({
                    user: user
                }

                )
            })


    }

    render() {
        const user = this.state.user
        console.log(user)
        if (!user) {
            return (
                <p>Loading user</p>
            )
        }

        return (
            <div>

                <div className="profile-page userDetails">
                    <img className="circle responsive-img" src={user.avatarUrl} width="300x" height="300px" />
                    <h4> {user.nameFirst} {user.nameLast}</h4>
                    <div className="textProfile">
                        {/* <p>{user.about.bio}</p> */}
                    </div>
                    <p className="postsNumb"> <span className="circle">C</span> <span>15 posts</span><span className="circle">C</span> <span>30 Comments</span></p>
                </div >
            </div>

        )
    }

}
