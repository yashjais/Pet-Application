import React from 'react'
import {connect} from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import {Link} from 'react-router-dom'

import Add from './components/profile/Add' 

function Home(props) {
    console.log(props)
    return (
        <div>
            <h2>This is Home Page</h2>

            {isEmpty(props.user) ? 
            <div>
                <h3>Welcome to this website</h3> 
            </div>: 
            <div>
                <h3>You are a {props.user.role}</h3>
                
                {
                    Object.keys(props.profile).length == 0 ? 
                    <div>
                        <h4> Your Profile isn't updated</h4>
                        <h4> Please fill the profile <Link to='/profile-add'>here</Link></h4>
                    </div> : 
                    <div>
                        <p> Your Profile is updated. Check You Profile <Link to='/profile'>here</Link> </p>
                    </div>
                }
            </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        profile: state.profile
    }
}

export default connect(mapStateToProps)(Home)