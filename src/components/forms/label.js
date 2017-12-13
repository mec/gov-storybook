import React from 'react';

const Label = ({ labelText = 'Label', hint }) => (
  <label className="form-label" htmlFor="full-name-f1">
    {labelText}
    {hint && <span className="form-hint">{hint}</span>}
  </label>
);

export default Label;
