import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
      persons: [
        {id:'asfsf', name: 'Maxx', age: 28},
        {id:'fdgg', name: 'Manuel', age: 29},
        {id:'fdgh',  name: 'Carl', age: 26}
      ],
      otherState: 'Some other value',
      showPersons: false
    }


    switchNameHandler = (newName) => {
      console.log('was clicked');
      this.setState({
        persons: [
          {name: newName, age: 28},
          {name: 'Manuel', age: 29},
          {name: 'Carl', age: 2666}
        ]
      })
    }

    nameChangedHandler = (event, id) =>{
      const personIndex = this.state.persons.findIndex(p=>{
        return p.id ===id;
      })

      const person = {...this.state.persons[personIndex]};

      person.name = event.target.value
      const persons = [...this.state.persons];
      person[personIndex] = person;
      this.setState({persons:persons});

      this.setState({
        persons: [
          {name: 'Maxim', age: 28},
          {name: event.target.value, age: 29},
          {name: 'Carl', age: 2666}
        ]
      })
    }

    togglePerson= ()=> {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow})
    }

    deletePersonHandler = (personIndex) => {
      const persons = this.state.persons;
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
    }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit', 
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
   
    if(this.state.showPersons) {
      persons = (
        <div>
         {this.state.persons.map((person, index)=>{
           return <Person
           click = {()=> {this.deletePersonHandler(index)}}
           name ={person.name}
           age = {person.age}
           key = {person.id}
           changed = {(event) => this.nameChangedHandler(event, person.id)}
           />
         })

         }
        </div>
      );
      console.log(persons);
    }

      return (
        <div className="App">
        <h1>Hello React</h1>
        <p>this is working</p>
        <button style ={style} onClick={this.togglePerson}>Switch Name</button>
        { 
        this.state.showPersons===true ?
          <div>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Maximilian')}  />
        <Person name='Max' age='28' />
        <Person changed ={()=>{this.nameChangedHandler}} age='29'>My hobbies : Racing </Person>
        <Person name='Sonia' age='26'/>
        </div> :null
        
        }
         {persons}
      </div> 
     );
   // return React.createElement('div' , {className: 'App'}, React.createElement('h1' ,null, 'Doest it work'))
  }
}

export default App;
