// components/Select.jsx
import React from 'react';
import './Select.scss';

function Select({ children, value, onValueChange, placeholder }) {
  return (
    <div className="select-wrapper">
      <select className="select" value={value} onChange={(e) => onValueChange(e.target.value)}>
        <option value="" disabled>{placeholder}</option>
        {children}
      </select>
    </div>
  );
}

function SelectItem({ value, children }) {
  return (
    <option className="select-item" value={value}>
      {children}
    </option>
  );
}

export { Select, SelectItem };