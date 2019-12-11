import React, {Component} from 'react';
import './App.css';

class Child extends Component{
  constructor () {
    super();
    this.state = {
      name: 'Koko'
    };
    console.log('--- child constructor')
  }

  UNSAFE_componentWillMount() {
    console.log('--- Child component will mount')
  }

  componentDidMount() {
    console.log('--- child Component did mount')
  }

  UNSAFE_componentWillReceiveProps() {
    console.log('--- Child Component will receive props')
  }

  shouldComponentUpdate(nextProps, nextState) {
      console.log('---Child Should component update');
      return false;
  }
  componentWillUpdate() {
    console.log('---Child Component will update');
  }

  componentWillUnmount() {
    console.log('--------Component will unmount !!!')
  }
  render() {
    console.log('--- Child Render')
    return (
      <div className = 'App'>
        Child name: {this.props.name}
      </div>
 
    )
  }
}

export default Child;
