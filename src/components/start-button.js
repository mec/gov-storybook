import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import iconPointer from '../images/icon-pointer.png';

const Button = styled.button`
  font-family: "HelveticaNeue", "Helvetica Neue", "Arial", "Helvetica", sans-serif;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.textColor};
  position: relative;
  padding: 0.526315em 0.789473em 0.263157em;
  border: none;
  border-radius: 0;
  outline: 1px solid transparent;
  outline-offset: -1px;
  font-size: 1em;
  line-height: 1.25;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 2px 0 ${props => props.theme.darkerBackground};
  background-image: url(${iconPointer});
  background-repeat: no-repeat;
  background-position: 100% 50%;
  padding: 7px 41px 4px 16px
`;

const StartButton = ({ text, clicked }) => (
  <Button onClick={clicked}>
    {text}
  </Button>
);

export default StartButton;
