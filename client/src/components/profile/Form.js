import React from 'react'
import {connect} from 'react-redux'
import {startSetProfile} from '../../actions/profile'
import {startGetServices} from '../../actions/services'

class PetForm extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            user: '',
            bio: '',
            avatar: '',
            services: '',
            location: '', // 'Pune', 'Bangalore', 'Chennai'
            reviews: '',
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.props.user._id)
        // console.log(this.state.location)
        const formData = {
            user: this.props.user._id,
            bio: this.state.bio,
            location: this.state.location
        }
        if(formData.bio.length < 3 || formData.location.length <3){
            alert('Please fill the form first')
        }else {
            const token = localStorage.getItem('authToken')
            
            // const redirect = () => this.props.history.push('/')
            // this.props.dispatch(startSetProfile(formData, redirect, token))
        }
    }
    handleLocChange = (e) => {
        this.setState({
            location: e.target.value
        })
    }
    componentDidMount = () => {
        const token = localStorage.getItem('authToken')
        if(this.props.user.role == 'petsitter') {
            this.props.dispatch(startGetServices(token))
        }
        // startGetServices
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="bio">Tell Us About Yourself</label>
                <input type="text" id="bio" name="bio" onChange={this.handleChange} value={this.state.bio} placeholder='bio' /> <br />

                <label>Location : </label> <br />
                <label>Pune</label>
                <input type="radio" id="location" name="location" onChange={this.handleLocChange} value={`Pune`} defaultChecked={this.state.location} /> <br />
                <label>Bangalore</label>
                <input type="radio" id="location" name="location" onChange={this.handleLocChange} value={`Bangalore`} defaultChecked={this.state.location} /> <br />
                <label>Chennai</label>
                <input type="radio" id="location" name="location" onChange={this.handleLocChange} value={`Chennai`} defaultChecked={this.state.location} /> <br />

                <input type="submit" value="submit" />
                </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        services: state.services
    }
}

export default connect(mapStateToProps)(PetForm)