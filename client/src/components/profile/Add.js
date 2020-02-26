import React from 'react'
import PetForm from './Form'


function AddProfile(props) {
    return (
        <div>
            <h3>Add Your Profile here</h3>
            <PetForm {...props}/>
        </div>
    )
}

export default AddProfile