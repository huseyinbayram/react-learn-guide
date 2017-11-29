import React from 'react';
import './Person.css';

const Person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I am {props.name} and I'm {props.age} old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
