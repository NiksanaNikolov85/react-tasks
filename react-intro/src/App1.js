import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app1 = props => {
 const [personState, setPersonsState] = useState({
    persons: [
      {name: 'Maxx', age: 28888},
      {name: 'Manuel', age: 29},
      {name: 'Carl', age: 26}
    ],
    otherState: 'Some other value'
  });

 const [otherState, setOtherstate]= useState('This is another example');

  console.log(personState, otherState);

const switchNameHandler = () => {
  console.log('was clicked');
  setPersonsState({
    persons: [
      {name: 'Maxximilian', age: 28},
      {name: 'Manuel', age: 29897},
      {name: 'Carl', age: 2666}
    ]
  })
}

      return (
        <div className="App">
        <h1>Hello React</h1>
        <p>this is working</p>
        <Person
         name={personState.persons[0].name} age={personState.persons[0].age} />
        <Person
         name={personState.persons[1].name} age={personState.persons[1].age}
         click={this.switchNameHandler} />

        <button onClick={switchNameHandler}>Switch Name</button>
        <Person
         name='Max' age='28' />
        <Person
         name='Manu' age='29'>My hobbies : Racing </Person>
        <Person
         name='Sonia' age='26'/>
      </div> 
     );
   // return React.createElement('div' , {className: 'App'}, React.createElement('h1' ,null, 'Doest it work'))
}

export default app1;



