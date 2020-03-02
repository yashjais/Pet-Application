import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function List(props) {
    console.log(props)
    return(
        <div>
            <h2>Listing of Pets</h2>
            {
                props.pets.map(pet => {
                    return (
                        <li key={pet._id}>
                            Neutered: - {pet.neutered ? 'true' : 'false'} -- Vaccinated: {pet.vaccinated ? 'true' : 'false'} -- Microchipped: {pet.microchipped ? 'true' : 'false'} -- Name: {pet.name} -- Breed: {pet.breed} -- Gender: {pet.gender}
                        </li>
                    )
                })
            }
            <Link to="/pets/add">add</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pets: state.pets
    }
}

export default connect(mapStateToProps)(List)