import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  background-color: ${props.primary};
  position: relative;
  padding: .526315em .789473em .263157em;
  border: none;
  outline: 1px solid transparent;
  outline-offset: -1px;
  font-size: 1em;
  line-height: 1.25;
  text-decoration: none;
  cursor: pointer;
  &:before {
    content: "";
    height: 110%;
    width: 100%;
    display: block;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Button = ({ text, clicked, primary }) => <Input type="submit" value={text} onClick={clicked} primary={primary}/>;

Button.propTypes = {
  /** The button label. */
  text: PropTypes.string,
  /** The main colour of the button */
  primary: PropTypes.string,
  /** The function called when the button is clicked. */
  clicked: PropTypes.func
};

Button.defaultProps = {
  text: 'Submit',
  primary: '#00823b'
};

export default Button;
