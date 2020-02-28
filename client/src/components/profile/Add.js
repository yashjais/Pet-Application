import React from 'react'
import PetForm from './Form'
import {startSetProfile} from '../../actions/profile'
import {connect} from 'react-redux'

function AddProfile(props) {
    const handleSubmit = (profile, redirect, token) => {
        const services = []
        if(profile.services.length != 0){
            profile.services.forEach(ser => {
                const obj = {}
                obj._id = ser.value
                services.push(obj)
            })
            profile.services = services
        }
        console.log(profile)
        props.dispatch(startSetProfile(profile, redirect, token))
    }
    return (
        <div>
            <h3>Add Your Profile here</h3>
            <PetForm {...props} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default connect()(AddProfile)