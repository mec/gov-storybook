import React from 'react';

const Notice = ({ type, text }) => (
  <div className="notice">
    <i className="icon icon-important">
      <span className="visually-hidden">{type}}</span>
    </i>
    <strong className="bold-small">{text}</strong>
  </div>
);

export default Notice;
