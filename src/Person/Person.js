import React from 'react';
import classes from './Person.css';

const Person = props => {
  const rand = Math.random();
  if (rand > 0.7) {
    throw new Error('I crashed!!!');
  }

  return (
    <div className={classes.person}>
      <p onClick={props.click}>
        I am {props.name} and I'm {props.age} old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
