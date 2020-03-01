import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function ListProfile(props) {
    console.log(props)
    return (
        <div>
            {Object.keys(props.profile).length == 0 ? <h3>Your profile isn't updated. Please update it <Link to="/profile-add">here</Link></h3> : (
                <div>
                    <h2>Bio - {props.profile && props.profile.bio}</h2>
                    <h2>Location - {props.profile && props.profile.location}</h2> 
                    <h2>{props.user && props.user.role == 'petsitter' && props.profile.services && ( `Services` - 
                            props.profile.services.map(servi => {
                                return (
                                    <div key={servi}>{servi}</div>
                                ) 
                            })
                        )}</h2>
                    <h2>Role - {props.user && props.user.role}</h2>
                    <Link to={`/profile/edit/${props.profile && props.profile._id}`}>edit</Link>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        user: state.user,
        services: state.services
    }
}

export default connect(mapStateToProps)(ListProfile)