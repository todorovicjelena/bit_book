import React from 'react'
import { registerService } from '../../services/RegisterService'

export class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


            name: '',
            email: '',
            password: '',

            errors: {}

        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogin = this.handleLogin.bind(this)

    }

    handleSubmit(event) {
        event.preventDefault();
        const errors = {}
        if (!this.validateRegister()) {
            return
        }

        const { name, email, password } = this.state
        registerService.fetchRegister(name, email, password)
            .then((res) => {
                console.log(res);
                localStorage.setItem('accessToken', res.accessToken);
                window.location.reload()


                // redirect to login
            })
            .catch(error => {
                errors = {
                    login: error
                }
                this.setState({
                    errors
                })

                // show error on screen
            })
    }

    validateRegister() {
        const name = this.state.name;
        const email = this.state.email;
        const pass = this.state.password;
        const errors = {};

        if (name.length < 5) {
            errors.name = 'invalid input'
        }
        if (!email.includes('@')) {
            errors.email = 'invalid email input'
        }
        if (pass.length < 5) {
            errors.password = 'password must have at least 5 characters'
        }
        this.setState({ errors })


        return Object.keys(errors).length === 0

    }

    handleUsername(event) {
        this.setState({
            name: event.target.value
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
    handleLogin() {
        this.props.history.push('/login/')
    }



    render() {

        const { errors } = this.state


        return (
            <>
                <button onClick={this.handleLogin}>login</button>
                <form onSubmit={this.handleSubmit}>

                    <label> Username:
            <input type="text" value={this.state.name} onChange={this.handleUsername} />
                        <p>{errors.name}</p>

                    </label>

                    <label>
                        Email:<input type="text" value={this.state.email} onChange={this.handleEmail} />
                        <p>{errors.email}</p>

                    </label>
                    <label>pass:
                <input type='password' value={this.state.password} onChange={this.handlePassword} />
                        <p>{errors.password}</p>

                    </label>

                    <input type="submit" value="Register" />
                    <p>{errors.login}</p>
                </form>
            </>
        )
    }
}