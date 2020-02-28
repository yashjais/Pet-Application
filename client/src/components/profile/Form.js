import React from 'react'
import {connect} from 'react-redux'
import axios from '../../config/axios'
import Select from 'react-select'
import {startSetServices} from '../../actions/services'

class PetForm extends React.Component {
    constructor(props) {
        super(props)
        console.log(props, 'in the constructor of Petform')
        this.state = {
            user: '',
            bio: props.bio ? props.bio : '',
            avatar: '',
            services: [],
            location: props.location ? props.location : '', // 'Pune', 'Bangalore', 'Chennai' // slight bug is here location of my model and props location are with the same name 
            reviews: '',
            allServices: []
        }
        console.log(this.state, 'state')
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.props.user._id)
        // console.log(this.state.location)
        const formData = {
            user: this.props && this.props.user._id,
            bio: this.state.bio,
            location: this.state.location,
            services: this.state.services
        }
        if(formData.bio.length < 3 || formData.location.length <3){
            alert('Please fill the form first')
        }else {
            const token = localStorage.getItem('authToken')
            const redirect = () => this.props.history.push('/profile')
            this.props.handleSubmit(formData, redirect, token)
        }
    }
    handleLocChange = (e) => {
        console.log('clicked')
        console.log(e.target.id)
        this.setState({
            location: e.target.id
        })
    }
    handleServiceChange = (selectedOption) => {
        const services = selectedOption
        this.setState({services})
    }
    componentDidMount = () => {
        console.log('in com')
        const token = localStorage.getItem('authToken')
        if(this.props.user.role == 'petsitter') {
            axios.get('/services',{
                headers: {
                    'x-auth': token
                }
            })
                .then(response => {
                    const data = response.data
                    console.log(data) 
                    this.props.dispatch(startSetServices(data, token))
                    const allServices = []
                    data.forEach(se => {
                        allServices.push({label: se.service, value: se._id})
                    })
                    console.log(allServices)
                    this.setState({allServices})
                })
        }
    }
    render() {
        console.log('in render', this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="bio">Tell Us About Yourself</label>
                <input type="text" id="bio" name="bio" onChange={this.handleChange} value={this.state.bio} placeholder='bio' /> <br />

                {this.props.user.role == 'petsitter' && 
                    <label>
                    Services
                        <Select className="col-md-4 "
                        onChange={this.handleServiceChange} 
                        isMulti 
                        key={this.state.allServices.value} 
                        options={this.state.allServices} />
                    </label>
                }
                <br />

                <label>Location : </label> <br />
                <label>Pune</label>
                <input type="radio" id="Pune" name="location" onChange={this.handleLocChange} value={this.state.location} checked={this.state.location == 'Pune' ? true : false} /> <br />
                <label>Bangalore</label>
                <input type="radio" id="Bangalore" name="location" onChange={this.handleLocChange} value={this.state.location} checked={this.state.location == 'Bangalore' ? true : false} /> <br />
                <label>Chennai</label>
                <input type="radio" id="Chennai" name="location"  onChange={this.handleLocChange} value={this.state.location} checked={this.state.location == 'Chennai' ? true : false} /> <br />

                <input type="submit" value="submit" />
                </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(PetForm)