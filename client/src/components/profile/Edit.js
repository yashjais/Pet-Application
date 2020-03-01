import React from 'react'
import Form from './Form'
import {connect} from 'react-redux'
import {startUpdateProfile} from '../../actions/profile'

function ListEdit(props) {
    const handleSubmit = (profile, redirect, token) => {
        console.log(profile, 'in the edit')
        const id = props.id
        // console.log(profile, id, redirect, token)
        console.log(profile.services, 'in profile services')
        const services = [] 
        if(profile.services.length != 0){
            profile.services.forEach(ser => {
                const obj = {}
                obj._id = ser.value
                services.push(obj)
            })
            profile.services = services
        }
        const redirectt = () => props.history.push('/')
        console.log('after edition', profile, redirect)
        // console.log(props)
        props.dispatch(startUpdateProfile(profile, id, redirectt, token))
    }
    console.log(props, 'huehue')
    return (
        <div>
            <h2>Edit the Profile here</h2>
            <Form {...props.profile} handleSubmit={handleSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        id: state.profile._id
    }
}

export default connect(mapStateToProps)(ListEdit)