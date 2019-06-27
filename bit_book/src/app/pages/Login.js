import React from 'react';
import './login.css';
import { registerService } from '../../services/RegisterService'


export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}

        }



        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRegister = this.handleRegister.bind(this)
    }


    handleSubmit(event) {
        event.preventDefault();

        if (!this.validateLogin()) {
            return
        }
        const { email, password } = this.state
        let errors = {}

        registerService.fetchLogin(email, password)
            .then((res) => {
                console.log(res);
                localStorage.setItem('accessToken', res.accessToken);
                window.location.reload()
            })
            .catch(error => {
                errors = {
                    login: error
                }
                this.setState({
                    errors
                })
            })



    }
    validateLogin() {

        const email = this.state.email;
        const pass = this.state.password;
        const errors = {};


        if (!email.includes('@')) {
            errors.email = 'invalid email input'
        }
        if (pass.length < 5) {
            errors.password = 'password must have at least 5 characters'
        }
        this.setState({ errors })


        return Object.keys(errors).length === 0

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

    handleRegister() {
        this.props.history.push('/register/')
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
                        <form onSubmit={this.handleSubmit} className="form col s12">
                            <div className="rowLoginRegister">
                                <div className="login input-field col s6">
                                    <input type="button" className="loginValidate" value="Login" />
                                </div>
                                <div className="register input-field col s6">
                                    <input type="button" className="registerValidate" value="Register" onClick={this.handleRegister} />
                                </div>
                            </div>

                            <div className="rowPass">
                                <div className="pass email input-field col s12">
                                    <input type="text" className="validate" value={this.state.email} onChange={this.handleEmail} />
                                    <label>Email</label>
                                </div>
                                <p>{this.state.errors.email}</p>

                            </div>
                            <div className="rowEmail">
                                <div className="pass input-field col s12">
                                    <input type="password" className="validate" value={this.state.password} onChange={this.handlePassword} />
                                    <label>Password</label>
                                </div>
                                <p>{this.state.errors.password}</p>


                                <div className="input-field col s6">
                                    <input type="submit" className="loginGo" value="Login" />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
                <p>{this.state.errors.login}</p>


            </>

        )
    }
}

