import React from 'react'
import './Useroutput.css';


const userOutput = (props) => {
    return (
        <div className ="UserOutput">
            <p>Username : {props.userName}</p>
            <p>some random text some random text</p>

        </div>
    )
}

export default userOutput;