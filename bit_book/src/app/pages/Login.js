import React from 'react';
import './login.css'


export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''

        }



        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit() {

        const email = this.state.email
        const password = this.state.password

        this.setState({

            email: '',
            password: ''
        })

    }


    handleEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    handlePassword(event) {
        this.setState({
            password: event.target.value
        })
    }


    render() {
        console.log(this.state.email)
        console.log(this.state.password)

        return (

            <>
                <div className="textOnFirstPage">
                    <h3>BitBook Login</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>


                <div className="wholeLoginPage">
                    <div className="row">
                        <form className="col s12">
                            <div className="rowLoginRegister">
                                <div className="login input-field col s6">
                                    <input id="last_name" type="button" className="loginValidate" value="Login" />
                                </div>
                                <div className="register input-field col s6">
                                    <input id="last_name" type="button" className="registerValidate" value="Register" />
                                </div>
                            </div>

                            <div className="rowPass">
                                <div className="pass email input-field col s12">
                                    <input id="email" type="email" className="validate" value={this.state.email} onChange={this.handleEmail} />
                                    <label>Email</label>
                                </div>

                            </div>
                            <div className="rowEmail">
                                <div className="pass input-field col s12">
                                    <input type="password" className="validate" value={this.state.password} onChange={this.handlePassword} />
                                    <label>Password</label>
                                </div>

                                <div className="input-field col s6">
                                    <input id="last_name" type="button" className="loginGo" value="Login" />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </>
        )
    }
}

