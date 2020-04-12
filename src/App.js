import React, { Component } from 'react';
// import logo from './logo.svg';
// prepare to create a profile website for it
import UserInput from './assignment_one/UserInput';
import UserOutput from './assignment_one/UserOutput' ; 

import './App.css';

class App extends Component {
  state={
    username:"genedy97"
  }

  usernameChangedHandler=(event)=>{
    this.setState({username:event.target.value});
  }


  render() {
    return (
      <div className="App">
        <UserInput 
        changed={this.usernameChangedHandler} 
        currentName={this.state.username}
        />
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="Max" />

      </div>
    )
  }

}

export default App;
