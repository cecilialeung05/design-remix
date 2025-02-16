
import React from 'react';
import './Input.scss';

function Input({ placeholder, value, onChange, id }) {
  return (
    <input
      type="text"
      id={id}
      className="input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;