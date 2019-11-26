import React, {Component}from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    username: 'SuperMax',
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
          <UserInput changed={this.usernameChangedHandler} currentValue={this.state.username}/>
          <UserOutput userName = 'Max'/>
          <UserOutput userName = {this.state.username}/>
          <UserOutput/>
      </div>
    )
  }

}

export default App;
