import React from 'react'

const userInput = (props) => {
    const styleinput = {
        border: '2px solid red',
    };
    return <input type='text' style ={styleinput} onChange ={props.changed} value= {props.currentValue}/>
}

export default userInput