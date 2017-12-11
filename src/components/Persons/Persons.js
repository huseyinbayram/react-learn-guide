import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside constructor()', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()');
  }

  componentWillUnmount() {
    console.log('[Persons.js] Inside componentWillUnmount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      '[Persons.js] UPDATE Inside componentWillReceiveProps()',
      nextProps
    );
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     '[Persons.js] UPDATE Inside shouldComponentUpdate()',
  //     nextProps,
  //     nextState
  //   );
  //   return (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.clicked !== this.props.clicked ||
  //     nextProps.changed !== this.props.changed
  //   );
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      '[Persons.js] UPDATE Inside componentWillUpdate()',
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log('[Persons.js] UPDATE Inside componentDidUpdate()');
  }

  render() {
    console.log('[Persons.js] Inside render()');

    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          key={person.id}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
