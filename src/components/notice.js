import React from 'react';

const Notice = ({ type, text }) => (
  <div class="notice">
    <i class="icon icon-important">
      <span class="visually-hidden">{type}}</span>
    </i>
    <strong class="bold-small">{text}</strong>
  </div>
);

export default Notice;
