import React, {Component} from 'react';
import './Person.css'
import Radium from 'radium';

class Person extends Component {
    render () {
        const rnd = Math.random();

        return (        
            <div className ='Person'>
                <p onClick={this.props.click}>i'm {this.props.name} a Person and i am {this.props.age} years old! </p>
        <p>{this.props.children}</p>
        <input type='text' onChange ={this.props.changed}></input>
            </div>
        )

    }

};

export default Radium(Person)