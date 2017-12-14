import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import iconPointer from '../images/icon-pointer.png';

const Button = styled.button`
  font-family: "HelveticaNeue", "Helvetica Neue", "Arial", "Helvetica", sans-serif;
  line-height: 1.25;
  font-weight: 700;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.textColor};
  position: relative;
  padding: 0.526315em 0.789473em 0.263157em;
  border: none;
  border-radius: 0;
  outline: 1px solid transparent;
  outline-offset: -1px;
  font-size: 1em;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 2px 0 ${props => props.theme.darkerBackground};
  background-image: url(${iconPointer});
  background-repeat: no-repeat;
  background-position: 100% 50%;
  padding: 8px 42px 5Px 17px;

  &:before {
    content: '';
    height: 110%;
    width: 100%;
    display: block;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:focus {
    background-color: ${props => props.theme.darkerBackground};
  }
  &:active {
    top: 2px;
    box-shadow: 0 0 0 ${props => props.theme.darkerBackground};
  }
  &:active:before {
    top: -10%;
    height: 120%;
  }
  &:disabled,
  &.disabled,
  &[disabled="disabled"],
  &[disabled] {
    background-color: ${props => props.theme.background};
    opacity: 0.5;
    cursor: default;
  }
  &:focus {
  outline: 3px solid ${props => props.theme.focusColor};
  }
} 
`;

const StartButton = ({ text, clicked }) => (
  <Button onClick={clicked}>
    {text}
  </Button>
);

export default StartButton;
