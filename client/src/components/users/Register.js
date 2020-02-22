import React from 'react'
import {connect} from 'react-redux'

import {startSetUser} from '../../actions/user'

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            mobile: '',
            password: '',
            role: ''  // 'petsitter', 'petowner', 'admin'
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
            username: this.state.username,
            email: this.state.email,
            mobile: this.state.mobile,
            password: this.state.password,
            role: this.state.role
        }
        console.log(formData)
        const redirect = () => this.props.history.push('/login')
        this.props.dispatch(startSetUser(formData, redirect))
    }
    render() {
        return (
            <div>
                <h2>Register page</h2>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" onChange={this.handleChange} value={this.state.username} placeholder='username' /> <br />

                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder='email' /> <br />

                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" id="mobile" name="mobile" onChange={this.handleChange} value={this.state.mobile} placeholder='mobile' /> <br />

                    <label htmlFor="role">Role</label> <br />
                    <label>Pet-Sitter</label> 
                    <input type="radio" id="role" name="role" onChange={this.handleChange} value='petsitter' /> 
                    <label>Pet-Owner</label>
                    <input type="radio" id="role" name="role" onChange={this.handleChange} value='petowner' /> <br />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder='password' /> <br />

                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default connect()(Register)