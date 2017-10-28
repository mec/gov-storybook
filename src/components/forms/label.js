import React from 'react';

const Label = ({ labelText = 'Label', hint }) => (
  <label className="form-label" for="full-name-f1">
    {labelText}
    {hint && <span class="form-hint">{hint}</span>}
  </label>
);

export default Label;
