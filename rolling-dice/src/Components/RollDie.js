import React, { Component } from 'react';
import Die from './Die'
import '../assets/rollDice.css'

class RollDie extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props) {
        super(props);
        this.state = { dieOne: 'one', dieTwo: 'one', rolling: false }
        this.roll = this.roll.bind(this)
    }

    roll() {
        const newDieOne = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        const newDieTwo = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]

        this.setState({ dieOne: newDieOne, dieTwo: newDieTwo, rolling: true })

        setTimeout(() => {
            this.setState({rolling: false})
        }, 1000)
    }
    render() {
        return (
            <div className='rollDice'>
                <div className='dieDiv'>
                    <Die face={this.state.dieOne} rolling={this.state.rolling} />
                    <Die face={this.state.dieTwo} rolling={this.state.rolling}/>
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
                </button>
            </div>
        )
    }
}

export default RollDie;