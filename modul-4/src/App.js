import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput : ''
  }

  inputChangeHandler = (event) => {
    console.log(this)

    this.setState({
      userInput: event.target.value
    })
  }

  deleteCharHandler = (index) => {
    let text = this.state.userInput.split('');
    text.splice(index, 1);
    console.log(text);
    let updateText = text.join('')
    this.setState({userInput: updateText})
  }

  splitChar = () => 
    this.state.userInput.split('').map((el,index) =>
      <Char character={el}
        key={index}
        clicked = {() => this.deleteCharHandler(index)}
      />
    );

  render () {
    const chars = this.splitChar();
    
    return (
      <div className='App'>
          <input type='text'
          onChange ={this.inputChangeHandler} 
          value={this.state.userInput} />

          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length}/>
          {chars}
      </div>
    ) 
  }
}

export default App;
