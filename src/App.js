import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Huseyin', age: 45 },
      { name: 'Mujgan', age: 19 },
      { name: 'John', age: 67 }
    ]
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 45 },
        { name: 'Mujgan Bayram', age: 19 },
        { name: 'John Smith', age: 67 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Huseyin', age: 45 },
        { name: event.target.value, age: 19 },
        { name: 'John', age: 67 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React Test App</h1>
        <p>It's really working!</p>
        <button onClick={() => this.switchNameHandler('Hugo Bayram')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Huseyin')}
          changed={this.nameChangedHandler}
        >
          My hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
