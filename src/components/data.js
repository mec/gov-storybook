import React from 'react';

const Data = ({ size='large', value, text }) => (
  <div className="data">
    <span className="data-item bold-xxlarge">{value}</span>
    <span className="data-item bold-xsmall">{text}</span>
  </div>
);

export default Data;
