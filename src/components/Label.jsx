// components/Label.jsx
import React from 'react';
import './Label.scss';

function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="label">
      {children}
    </label>
  );
}

export default Label;