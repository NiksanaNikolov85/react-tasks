import React, {Component} from 'react';
import User from './User'

class App extends Component {
    state = {
        users: [
            {name: 'John', age:20},
            {name: 'Mike', age:30},
            {name: 'Max', age:40},
            {name: 'Max', age:40},
        ],
        title:'Users List',
    }

    makeMeYounger = () => {
        const newState = this.state.users.map((user) => {
            const tempuser = user;
            tempuser.age -=10;
            return tempuser;
        });
        this.setState({
            newState
        });
    }
    render() {
        return (
            <div className='App'>
                <h1>{this.state.title}</h1>
                <button onClick={this.makeMeYounger}>Change years</button>
                <br />
               {
                   this.state.users.map((user)=>{
                   return <User age ={user.age}>{user.name}</User>
                   })
               }
            </div>
            
        )
    }
}

export default App;