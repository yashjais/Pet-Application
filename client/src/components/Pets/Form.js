import React from 'react'

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            breed: '',
            gender: '',
            neutered: '',
            vaccinated: '',
            microchipped: '',
            user: ''
        }
    }
    render() {
        return (
            <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} placeholder='name' /> <br />
    
                    <label htmlFor="breed">Breed</label>
                    <input type="checkbox" id="breed" name="breed" onChange={this.handleChange} value={this.state.breed} placeholder='breed' /> <br />

                    <label htmlFor = "gender">Gender</label>
                    <input type="checkbox" id="gender" name="gender" onChange={this.handleChange} value={this.state.gender} /> <br />

                    {/* <label htmlFor="neutered">Neutered</label>
                    <input type="checkbox" id="neutered" name="neutered" onChange={this.handleChange} value={this.state.neutered} /> <br /> */}
    
                    <input type="submit" value="submit" />
            </form>
        )
    }
}

export default Form