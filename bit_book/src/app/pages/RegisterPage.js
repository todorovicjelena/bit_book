import React from 'react'

export class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            pass: ''

        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this)
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
        console.log(this.state.username);
        console.log(this.state.email);
        console.log(this.state.pass);



        return <form >
            <label> Username:
            <input type="text" value={this.state.username} onChange={this.handleUsername} />

            </label>

            <label>
                Email:<input type="text" value={this.state.email} onChange={this.handleEmail} />

            </label>
            <label>pass:
                <input type='password' value={this.state.pass} onChange={this.handlePassword} />

            </label>

            <input type="submit" value="Register" />
        </form>
    }
}