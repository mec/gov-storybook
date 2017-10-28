import React from 'react';

const PhaseBanner = ({ phase = 'alpha', feedbackLink = '#' }) => (
  <div class="phase-banner">
    <p>
      <strong class="phase-tag">{phase}</strong>
      <span>
        This is a new service – your <a href={feedbackLink}>feedback</a> will help us to improve it.
      </span>
    </p>
  </div>
);

export default PhaseBanner;
