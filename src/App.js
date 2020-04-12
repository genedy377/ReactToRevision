import React, { Component } from 'react';
// import logo from './logo.svg';
// prepare to create a profile website for it 

import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Eslam', age: '6' },
      { name: 'Ahmed', age: '179' },
      { name: 'Genedy', age: '78' }
    ],
    Date: new Date()
  }

  render() {
    return (
      <div className="App">

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          Date={this.state.Date.toLocaleTimeString()}
        >
        </Person>

        {/* <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person> */}

      </div>
    )
  }

}

export default App;
