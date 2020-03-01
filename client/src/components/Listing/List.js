import React from 'react'
import {connect} from 'react-redux'

function Listing(props) {
    console.log(props)
    return (
        <div>
            <h3>Listing of users</h3>
            {
                props.showProfiles.map(profile => {
                    return (
                        <li key={profile._id}>{profile.user.username} - {profile.bio} -- {profile.location}</li>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        profiles: state.profiles,
        profile: state.profile,
        showProfiles: state.profiles.filter(ele => ele.user.role != state.user.role)
    }
}

export default connect(mapStateToProps)(Listing)