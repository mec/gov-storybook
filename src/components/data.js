import React from 'react';

const Data = ({ size='large', value, text }) => (
  <div class="data">
    <span class="data-item bold-xxlarge">{value}</span>
    <span class="data-item bold-xsmall">{text}</span>
  </div>
);

export default Data;
