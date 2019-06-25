import React from 'react';
import './login.css'


export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],


        }
    }
    //     componentDidMount()


    // }

    render() {

        return (
            <>

                <p>BitBooK Login</p>
                <div className="loginPage" >



                    <div className="buttons">
                        <input className="loginButton" type="button" value="Login"></input>
                        <input className="registerButton" type="button" value="Register"></input>
                    </div>
                    <div className="bodyLogin"> <span>email </span>
                        <input type="" placeholder="Email Address"></input>
                        <p className="error">Error</p>
                        <span>pass </span>
                        <input type="" placeholder="Password"></input>
                    </div>
                    <input className="loginToNextPage" type="button" value="Login"></input>
                    <p className="error">Unable to login, invalid credentials</p>

                </div>


            </>
        )
    }

}