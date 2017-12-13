import React from 'react';

const PhaseBanner = ({ phase = 'alpha', feedbackLink = '#' }) => (
  <div className="phase-banner">
    <p>
      <strong className="phase-tag">{phase}</strong>
      <span>
        This is a new service – your <a href={feedbackLink}>feedback</a> will help us to improve it.
      </span>
    </p>
  </div>
);

export default PhaseBanner;
