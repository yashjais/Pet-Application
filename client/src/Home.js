import React from 'react'
import {connect} from 'react-redux'
import isEmpty from 'lodash/isEmpty'

function Home(props) {
    return (
        <div>
            <h2>This is Home Page</h2>

            {isEmpty(props.user) ? 
            <h3>Welcome to this website</h3> : 
            <h3>You are a {props.user.role}</h3>
            }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Home)