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
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(event) {
        event.preventDefault();

        if (!this.validateRegister()) {
            return
        }

        const { name, email, password } = this.state
        registerService.fetchRegister(name, email, password)
            .then(() => {
                // redirect to login
            })
            .catch(error => {
                // show error on screen
            })





        // this.setState({
        //     name: '',
        //     email: '',
        //     pass: ''

        // })
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



    render() {

        const { errors } = this.state


        return <form onSubmit={this.handleSubmit}>
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
        </form>
    }
}