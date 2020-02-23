import React from 'react'
import {connect} from 'react-redux'

function Account(props) {
    return (
        <div>
            <h2>Account Page</h2>

            <h3>{props.user.email}</h3>
            <h3>{props.user.username}</h3>
            <h3>{props.user.mobile}</h3>
            <h3>{props.user.role}</h3>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Account)