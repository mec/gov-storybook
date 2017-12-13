import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const lightenDarkenColor = function (col, amt) {
	var usePound = false;
	if (col[0] == "#") {
		col = col.slice(1);
		usePound = true;
	}
	var num = parseInt(col, 16);
	var r = (num >> 16) + amt;
	if (r > 255) {
		r = 255;
	} else if (r < 0) {
		r = 0;
	}
	var b = ((num >> 8) & 0x00FF) + amt;
	if (b > 255) {
		b = 255;
	} else if (b < 0) {
		b = 0;
	}
	var g = (num & 0x0000FF) + amt;
	if (g > 255) {
		g = 255;
	} else if (g < 0) {
		g = 0;
	}
  //return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
  return (usePound?"#":"") + String("000000" + (g | (b << 8) | (r << 16)).toString(16)).slice(-6);
}

const Input = styled.input`
  font-family: "HelveticaNeue", "Helvetica Neue", "Arial", "Helvetica", sans-serif;
  background-color: ${props => props.primary};
  color: white;
  position: relative;
  padding: 0.526315em 0.789473em 0.263157em;
  border: none;
  outline: 1px solid transparent;
  outline-offset: -1px;
  font-size: 1em;
  line-height: 1.25;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 2px 0 ${props => lightenDarkenColor(props.primary, -15)};
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
    background-color: ${props => lightenDarkenColor(props.primary, -5)};
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
      box-shadow: 0 2px 0 ${props => lightenDarkenColor(props.primary, -5)};
    }
  }
  &:hover[disabled="disabled"]  {
    cursor: default;
    background-color: ${props => props.primary};
  }
  &:hover[disabled="disabled"]  {
    top: 0;
    box-shadow: 0 2px 0 ${props => lightenDarkenColor(props.primary, -5)};
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
