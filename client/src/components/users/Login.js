import React from 'react'
import {connect} from 'react-redux'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(formData)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>Login page</h2>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder='email' /> <br />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder='password' /> <br />

                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default connect()(Login)