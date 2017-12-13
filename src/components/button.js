import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  border: 1px solid black;
  background: none;
`;

const Button = ({ text, clicked }) => <Input type="submit" value={text} onClick={clicked}/>;

Button.propTypes = {
  text: PropTypes.string,
  clicked: PropTypes.func
};

Button.defaultProps = {
  text: 'Submit'
};

export default Button;
