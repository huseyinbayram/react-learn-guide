import React from 'react';

import classes from './Cockpit.css';
import Aux from '../../hoc/Auxiliary';

const cockpit = props => {
  const assignedClasses = [];
  let buttonStyle = classes.Button;
  if (props.showPersons) {
    buttonStyle = [classes.Button, classes.red].join('  ');
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>It's really working!</p>
      <button className={buttonStyle} onClick={props.clicked}>
        Switch Name
      </button>
    </Aux>
  );
};

export default cockpit;
