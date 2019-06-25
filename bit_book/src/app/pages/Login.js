import React from 'react';
import './login.css'


export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            pass: ''

        }


        this.handleUsername = this.handleUsername.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handleUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit() {
        const username = this.state.username
        const email = this.state.email
        const pass = this.state.pass

        this.setState({
            username: '',
            email: '',
            pass: ''
        })

    }

    handleUsername(event) {
        this.setState({
            username: event.target.value
        })
    }

    handleEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    handlePassword(event) {
        this.setState({
            pass: event.target.value
        })
    }


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
                        <input type="" placeholder="Email Address" value={this.state.email} onChange={this.handleEmail}></input>
                        <p className="error">Error</p>
                        <span>pass </span>
                        <input type="" placeholder="Password" value={this.state.pass} onChange={this.handlePassword}></input>
                    </div>
                    <input className="loginToNextPage" type="button" value="Submit"></input>
                    <p className="error">Unable to login, invalid credentials</p>
                </div>
            </>

        )
    }
}

