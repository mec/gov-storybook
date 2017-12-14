import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { darken, readableColor } from 'polished'

const Input = styled.input`
  font-family: "HelveticaNeue", "Helvetica Neue", "Arial", "Helvetica", sans-serif;
  background-color: ${props => props.primary};
  color: ${props => readableColor(props.primary)};
  position: relative;
  padding: 0.526315em 0.789473em 0.263157em;
  border: none;
  outline: 1px solid transparent;
  outline-offset: -1px;
  font-size: 1em;
  line-height: 1.25;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 2px 0 ${props => darken(0.15, props.primary)};
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
    background-color: ${props => darken(0.05, props.primary)};
  }
  &:active {
    top: 2px;
    box-shadow: 0 0 0 ${props => props.primary};
  }
  &:active:before {
    top: -10%;
    height: 120%;
  }
  &.disabled,
  &[disabled="disabled"],
  &[disabled] {
    opacity: 0.5;
    &:hover {
      cursor: default;
      background-color: ${props => props.primary};
    }
    &:active {
      top: 0;
      box-shadow: 0 2px 0 ${props => darken(0.05, props.primary)};
    }
  }
  &:hover[disabled="disabled"]  {
    cursor: default;
    background-color: ${props => props.primary};
  }
  &:hover[disabled="disabled"]  {
    top: 0;
    box-shadow: 0 2px 0 ${props => darken(0.05, props.primary)};
  }
`;

const Button = ({ text, clicked, primary, disabled }) => <Input type="submit" value={text} onClick={clicked} primary={primary} disabled={ disabled }/>;

Button.propTypes = {
  /** The button label. */
  text: PropTypes.string,
  /** The main colour of the button, hex value with # */
  primary: PropTypes.string,
  /** Is the button disabled, pass in 'disabled' */
  disabled: PropTypes.string,
  /** The function called when the button is clicked. */
  clicked: PropTypes.func
};

Button.defaultProps = {
  text: 'Submit',
  primary: '#00823b',
  disabled: ''
};

export default Button;
