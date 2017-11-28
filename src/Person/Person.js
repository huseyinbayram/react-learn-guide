import React from 'react';

const Person = props => {
  return (
    <div>
      <p onClick={props.click}>
        I am {props.name} and I'm {props.age} old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;