import React, { Component } from 'react';
import '../assets/die.css'

class Die extends Component {
    render() {
        return (
            <div className='dieDiv'>
                <i className={`die fas fa-dice-${this.props.face}`}></i>
            </div>
        )
    }
}

export default Die