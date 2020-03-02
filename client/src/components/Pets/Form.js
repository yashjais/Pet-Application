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
                    <label htmlFor="name">name</label>
                    <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} placeholder='name' /> <br />
    
                    
    
                    <input type="submit" value="submit" />
            </form>
        )
    }
}

export default Form