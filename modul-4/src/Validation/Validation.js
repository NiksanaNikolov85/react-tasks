import React from 'react'

const validation = (props) => {
    let text = 'The text is to short';
    if(props.inputLength >=5){
        text = 'Text is to Long';
    }
    return <p>{text}</p>;
};

export default validation;
