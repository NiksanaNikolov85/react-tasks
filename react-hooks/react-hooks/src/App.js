import React, {Component} from 'react';
import './App.css';
import Child from './child'

class App extends Component{
  constructor (props) {
    super(props);
    this.state = {
      name: 'Koko'
    };
    console.log('constructor')
  }


  static getDerivedStateFromProps(props, state) {
    console.log('1-Get derived state from props');
    console.log(props);
    console.log(state);
    return{name: props.neigh}
  }

  componentDidMount() {
    console.log('Component did mount')
  }

  UNSAFE_componentWillReceiveProps() {
    console.log('Component will receive props')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should component update');
    return true;
}

componentWillUpdate() {
  console.log('Component will update');
}

componentDidUpdate(prevProp, nextState) {
  console.log('component did already update')
}

  changeState() {
    this.setState({name: 'Ben'})
  }

  unmontChild() {
    this.setState({name: 'Robert'})
  }

  componentWillUnmount() {
    console.log('Component will unmount !!!')
  }

  render() {
    console.log('Render');
    if(this.state.name==='Robert'){
      return <div/>
    }
    return (
      <div className = 'App'>
     name: {this.state.name}
     width : {this.state.innerWidth}    
     <Child name ={this.state.name}/> 
     <button onClick ={this.changeState.bind(this)}>Change State</button>
     <button onClick ={this.unmontChild.bind(this)}>Unmount Child</button>

      </div>
 
    )
  }
}

export default App;
